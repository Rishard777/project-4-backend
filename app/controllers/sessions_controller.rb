class SessionsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    def login
        user = User.find_by!(name: params[:username])

        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            # session[:login_attempts] = 0
            render json: user, status: :ok
        else
            # session[:login_attempts] ||= 0
            # session[:login_attempts] += 1

            render json: {error: "Invalid username and/or password"}, status: :unauthorized
            
        end
    end

    def logout
        session.delete :current_user
    end

    private
    def record_not_found_response(exception)
        render json: {error: "User not found"}, status: :not_found
    end

end
