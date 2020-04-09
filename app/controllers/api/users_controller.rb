
class Api::UsersController <  ApplicationController

    def new
        render 'api/users/new.html.erb'
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :display_name, :password)
    end


end