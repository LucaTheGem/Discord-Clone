class Api::SessionsController < ApplicationController
    
    def new
        @user = User.new
        render :new
    end

    def create  
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
        else
            render json: ["Invalid username/password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            flash[:success] = ["Successfully Logged Out"]
        else
            render json: ["Invalid"]
        end
    end

end
