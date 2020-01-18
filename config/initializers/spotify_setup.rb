
# require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, ENV['client_id'], ENV['client_secret'], scope: %w[
  	 ugc-image-upload
     playlist-modify-public
     playlist-read-collaborative
     playlist-read-private
     user-read-private
     user-read-email
     user-library-read
     user-library-modify
   ].join(' ')
end