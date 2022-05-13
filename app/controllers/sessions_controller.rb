class SessionsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    def create
        user = User.find_by(name: params[:username])

        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: {current_user: "Check out our instruments!"}, status: :ok
        else
            render json: {error: :login "Invalid username and/or password"}, status: :unauthorized
            
        end
    end

    def destroy
        session.delete :current_user
        head :no_content
    end

    private
    def record_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

end
