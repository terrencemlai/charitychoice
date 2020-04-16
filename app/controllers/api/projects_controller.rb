
class Api::ProjectsController <  ApplicationController


    def create
        @project = Project.new(project_params)
        @project.teacher_id = current_user.teacher_id
 
        if @project.save
            if params[:categories].is_a?(Array) 
                params[:categories].each do |category_id|
                    CategoryAssociation.create( project_id: @project.id, category_id: category_id)
                end
            end
            render '/api/projects/show'
        else 
            render json: @project.errors.full_messages, status: 422
        end
    end


    def show
        @project = Project.includes(:school, :teacher, :donations, :categories).find(params[:id])
        render '/api/projects/show'
    end


    def index
        if params[:with_search] == "true" && params[:keyword].length > 0
            @query = params[:keyword].downcase
            @projects = Project.includes(:school, :teacher, :donations, :categories).joins(:teacher).joins(:categories).joins(:school).where("lower(projects.title)||' '||lower(projects.blurb)||' '||lower(categories.category)||' grades '||lower(schools.grade_range)||' '||lower(schools.name)||', '||lower(schools.city)||', '||lower(schools.state) like ?", '%'+@query+'%').limit(10)
        else
            @projects = Project.all.includes(:school, :teacher, :donations, :categories).order("RANDOM()").limit(10)
            @query = ""
        end
        render '/api/projects/index'
    end


    private
    def project_params
        params.require(:project).permit(:title, :blurb, :description, :about_students, :goal)
    end



end