class EmotionsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Emotion.all
    end

    def show
        emotions = Emotion.find(params[:id])
        render json: emotions, status: :ok
    end

    def create
        emotion = Emotion.create!(emotion_params)
        render json: emotion, status: :created
    end

    private

    def emotion_params
        params.permit(:string)
    end
end
