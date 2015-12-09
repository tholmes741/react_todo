Rails.application.routes.draw do
root to: "static_pages#root"
  namespace :api do
    resources :todos, exclude: [:edit, :new] do
      resources :steps, only: [:index, :create]
    end
    resources :steps, only:[:update, :destroy]
  end
end
