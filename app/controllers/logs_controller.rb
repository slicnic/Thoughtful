class LogsController < ApplicationController
    
    skip_before_action :authorize, only: :create
    wrap_parameters format: []

    def index
        lg = Log.all
        render json: lg
    end

     def show
        log = Log.find(params[:id])
        render json: log, status: :ok
    end

    def create
        log = Log.create!(log_params)
        render json: log, status: :created
    end

    private

    def log_params
        params.permit(:content, :user_id, :emotion_id)
    end


end
