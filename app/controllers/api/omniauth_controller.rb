class Api::OmniauthController < ApplicationController
	def spotify
		raise request.env['omniauth.auth'].inspect
	end
end