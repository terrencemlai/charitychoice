
class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_email(params[:user][:email])

        if @user && @user.password_digest
            redirect_to "/api/sessions/fullcreds/new.html.erb"
        elsif @user && !@user.password_digest
            @user.reset_session_token!
            redirect_to "/api/sessions/onlyemails/new.html.erb"
        else
          render json: ["Invalid username/password combination"], status: 401
        end
      end
    
      def destroy
        @user = current_user
        if @user
          logout!
          render json: @user
        else
          render json: ["Nobody signed in"], status: 404
        end
      end

end