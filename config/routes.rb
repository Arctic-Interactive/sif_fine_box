Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  devise_for :users
  authenticated :user do
    root "dashboard#main", as: :authenticated_root
  end

  devise_scope :user do
    root "devise/sessions#new"
  end
end
