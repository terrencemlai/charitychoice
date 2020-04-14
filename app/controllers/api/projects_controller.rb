require "byebug"

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
            render json: @project
        else 
            render json: @project.errors.full_messages, status: 422
        end
    end

    def show
        @project = Project.includes(:school, :teacher, :donations, :categories).find(params[:id])
        render '/api/projects/show'
    end

    private
    def project_params
        params.require(:project).permit(:title, :blurb, :description, :about_students, :goal)
    end



end