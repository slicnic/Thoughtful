Rails.application.routes.draw do
  resources :names
  resources :logs
  resources :emotions
  resources :sessions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup", to: "users#create"
  post "/logs", to: "logs#create"
  # get "/new", to: "logs#create"
  get "/me", to: "users#show"
  get "/logs", to: "logs#index"
  get "/emotions", to: "emotion#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/hello', to: 'application#hello_world'
  
end
