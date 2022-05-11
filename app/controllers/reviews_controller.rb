class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index
        render json: Review.all
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create
        review = Review.create!(reviews_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update(reviews_params)
        render json: review, status: :accepted
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

   
    private
    def reviews_params
        params.permit(:description, :instrument_id, :user_id)
    end

    def record_not_found_response
        render json: {error: "Review not found"}, status: :not_found
    end

    def unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
