Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :teachers, only: [:new, :create]
    resources :users, only: [:new, :create]
    resources :schools, only: [:index, :show]

    resource :sessions, only: [:new, :create, :destroy] do
      resource :onlyemails, only: [:create]
      resource :fullcreds, only: [:create]
    end

  end


  resources :teachers
end
