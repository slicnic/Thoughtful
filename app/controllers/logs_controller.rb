class LogsController < ApplicationController
    
    
    def index
        render json: Log.all
    end

     def show
        log = Log.find(params[:id])
        render json: log, status: :ok
    end


end
