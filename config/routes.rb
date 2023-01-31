Rails.application.routes.draw do
  resources :names
  resources :logs
  resources :emotions
  resources :sessions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  Rails.application.routes.draw do
  resources :emotions
  resources :sessions
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  end
  
end
