Rails.application.routes.draw do
  namespace :v1 do
    resources :blogs, only: [:create, :destroy, :index, :update]
  end
end