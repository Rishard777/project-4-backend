class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response


    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: session[:current_user])
        if user
            render json: current_user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private
    def record_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def user_params
        params.permit(:name, :admin, :password)
    end

    def unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
