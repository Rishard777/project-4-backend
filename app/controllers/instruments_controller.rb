class InstrumentsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    def index
        render json: Instrument.all
    end

    def show
    instrument = Instrument.find(params[:id])
    render json: instrument, serializer: InstrumentWithReviewsSerializer
    end 

    private
    def record_not_found_response
        render json: {error: "Instrument not found"}, status: :not_found
    end
end
