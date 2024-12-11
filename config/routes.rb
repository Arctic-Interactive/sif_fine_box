Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  devise_for :users
  devise_scope :user do
    root to: "devise/sessions#new"
  end
end
