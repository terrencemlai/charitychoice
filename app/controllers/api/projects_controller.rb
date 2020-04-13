

class Api::ProjectsController <  ApplicationController

    def new
        render '/api/projects/new.html.erb'
    end

    def create
        @project = Project.new(project_params)
        @project.teacher_id = current_user.teacher_id

        if @project.save
            params[:categories].each do |category|
                new_cat = Category.find_by(category: category)
                CategoryAssociation.create( project_id: @project.id, category_id: new_cat.id) if new_cat
            end
            render json: @project
        else 
            render json: @project.errors.full_messages, status: 422
        end
    end

    private
    def project_params
        params.require(:project).permit(:title, :blurb, :description, :about_students, :goal)
    end



end