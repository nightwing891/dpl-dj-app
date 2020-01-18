Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :songs do 
      collection do
        get :search
      end
    end
    resources :users do
      resources :rooms 
    end
    
    resources :rooms do
      resources :playlists 
    end
  end 
end
