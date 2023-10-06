class Api::ServersController < ApplicationController
    def create
        @server = Server.new(server_params)
        if @server.save
            redirect_to root_url
        else
            nil
        end
    end

    def show

    end

    def destroy
        if @server = Server.find_by(params[:name]) #we should add a way to find servers under the same owner
            @current_user = current_user
            if @current_user.id = @server[owner_id]
               if @server.delete
                    redirect_to root_url #should add success message later on
               else 
                nil # add inner most error msg which is 404 error
               end
            else 
                nil # current user is not the owner of the server
            end
        else
            nil # server does not exist
        end     
    end

    private
    def server_params
        params.require(:server).permit(:name, :description, :public, :owner_id)
    end 
    
end
