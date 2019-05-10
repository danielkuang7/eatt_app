Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  post '/users', to: 'users#create'
  post '/restaurants', to: 'restaurants#create'
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  get '/restaurants', to: 'restaurants#index'
  get '/restaurants/:id', to: 'restaurants#show'
  patch '/users/:id', to: 'users#update'
  patch '/restaurants/:id', to: 'restaurants#update'
  put '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  patch '/restaurants/:id', to: 'restaurants#update'
  put '/restaurants/:id', to: 'restaurants#update'
  delete '/restaurants/:id', to: 'restaurants#destroy'


  resources :users
  resources :restaurants
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
