

class Api::TeachersController <  ApplicationController

    def new
        @schools = School.all
        render 'api/teachers/new.html.erb'
    end

    def create
        @user = User.new(user_params)
        @teacher = Teacher.new(teacher_params)

        
        if  !@user.valid?
            @user.save
            render json: {user: @user.errors.full_messages}, status: 422
        elsif !@teacher.valid?
            @teacher.save
            render json: {teacher: @teacher.errors.full_messages}, status: 422
        elsif  @user.save && @teacher.save
            @user.teacher_id = @teacher.id 
            @user.is_teacher = true
            @user.save
            login(@user)
            render json: {user: @user, teacher: @teacher}
        else 
            render json: {user: @user.errors.full_messages, teacher: @teacher.errors.full_messages}, status: 422
        end

    end

    private
    def user_params
        params.require(:user).permit(:email, :display_name, :password)
    end

    def teacher_params
        params.require(:teacher).permit(:teacher_name, :honorific, :full_name, :school_id)
    end

end