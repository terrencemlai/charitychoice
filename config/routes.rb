Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :teachers, only: [:new, :create] do
      collection do
        get 'myprojects'
      end
    end

    resources :users, only: [:new, :create]

    resources :schools, only: [:index, :show]
    resources :projects
    resources :categories, only: [:index]

    namespace :auto do
      resource :schools, only: [:show]
    end

    resource :sessions, only: [:new, :create, :destroy]

  end


  resources :teachers
end
