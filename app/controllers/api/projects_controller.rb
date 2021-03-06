

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
        match_query = "lower(projects.title)||' '||lower(projects.blurb)||' '||lower(categories.category)||' grades '||lower(schools.grade_range)||' '||lower(schools.name)||', '||lower(schools.city)||', '||lower(schools.state) like ? AND categories.id in (?)"
        @page_length = 5
        @page = params.fetch(:page, 1).to_i - 1

        if !params[:filters] || params[:filters].length == 0
            @filters = Category.pluck(:id)
        else
            @filters = params[:filters]
        end

        if !params[:keyword] || params[:keyword].length == 0
            @query = ""
            @projects_total = Project.includes(:school, :teacher, :donations, :categories).joins(:teacher).joins(:categories).joins(:school).where('categories.id in (?)', @filters).count
            @projects = Project.includes(:school, :teacher, :donations, :categories).joins(:teacher).joins(:categories).joins(:school).where('categories.id in (?)', @filters).limit(@page_length).offset(@page * @page_length)
        else
            @query = params[:keyword].downcase
            @projects_total = Project.includes(:school, :teacher, :donations, :categories).joins(:teacher).joins(:categories).joins(:school).where(match_query, '%'+@query+'%', @filters).count
            @projects = Project.includes(:school, :teacher, :donations, :categories).joins(:teacher).joins(:categories).joins(:school).where(match_query, '%'+@query+'%', @filters).limit(@page_length).offset(@page * @page_length)
        end

        @page += 1
        render '/api/projects/index'
    end

    def update
        @project = Project.find(params[:project][:id])
        @project.update(title: params[:project][:title], description: params[:project][:description], about_students: params[:project][:about_students], goal: params[:project][:goal], blurb: params[:project][:blurb])
        if @project.save
            if params[:categories].is_a?(Array) 
                @categories = CategoryAssociation.where( project_id: params[:project][:id] ).all
                @categories.destroy_all
                params[:categories].each do |category_id|
                    CategoryAssociation.create( project_id: @project.id, category_id: category_id)
                end
            end
            render '/api/projects/show'
        else 
            render json: @project.errors.full_messages, status: 422
        end
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render json: ["Successfully deleted"]
    end

    private
    def project_params
        params.require(:project).permit(:title, :blurb, :description, :about_students, :goal)
    end



end