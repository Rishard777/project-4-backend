Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :instruments, only: [:index, :show]
  resources :users, only: [:index, :show, :update, :create, :destroy]

  get '/authorized_user', to: 'users#show'

  post '/login', to: 'sessions#login'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
