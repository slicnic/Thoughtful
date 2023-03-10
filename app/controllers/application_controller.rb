class ApplicationController < ActionController::API
  include ActionController::Cookies

        # def hello_world
        #     session[:count] = (session[:count] || 0) + 1
        #     render json: { count: session[:count] }
        # end

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
  @current_user = User.find_by(id: session[:user_id])

  render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
