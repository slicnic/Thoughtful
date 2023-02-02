class EmotionsController < ApplicationController

    def index
        render json: Emotion.all
    end

     def show
        emotions = Emotion.find(params[:id])
        render json: emotions, status: :ok
    end
end
