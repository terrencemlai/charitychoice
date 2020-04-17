

class Api::TeachersController <  ApplicationController

    def new
        @schools = School.all
        render 'api/teachers/new.html.erb'
    end

    def create
        @user = User.new(user_params)
        @teacher = Teacher.new(teacher_params)

        if  !@user.valid? && !@teacher.valid?
            @user.save
            @teacher.save
            render json: @user.errors.full_messages + @teacher.errors.full_messages, status: 422
        elsif !@user.valid?
            @user.save
            render json: @user.errors.full_messages, status: 422
        elsif !@teacher.valid?
            @teacher.save
            render json: @teacher.errors.full_messages, status: 422
        elsif @user.save && @teacher.save
            @user.teacher_id = @teacher.id 
            @user.is_teacher = true
            @user.save
            login(@user)
            render 'api/teachers/show'
        else 
            render json: @user.errors.full_messages + @teacher.errors.full_messages, status: 422
        end

    end

    def myprojects
        teacher_id = current_user.teacher_id
        @projects = Project.all.includes(:school, :teacher, :donations, :categories).joins(:teacher).where('teachers.id = ?', teacher_id)
        render '/api/projects/index'
    end

    
    private
    def user_params
        params.require(:user).permit(:email, :display_name, :password)
    end

    def teacher_params
        params.require(:teacher).permit(:teacher_name, :honorific, :full_name, :school_id)
    end

end