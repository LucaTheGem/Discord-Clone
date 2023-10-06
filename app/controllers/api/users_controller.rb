class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            redirect_to root_url
        else
           
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :tag, :terms_of_service, :birth_date)
    end
end
