class Api::RoomsController < ApplicationController

	def index
		render json: current_user.rooms
	end

	def create
		@room = current_user.rooms.new(room_params)
		if @room.save
			render json: @room
		else
			render json: { errors: @room.errors }, status: :unprocessable_entity
		end
	end

	def update
		@room = current_user.rooms.find(params[:id])
		if @room.update(room_params)
			render json: @room
		else
			render json: { errors: @room.errors }, status: :unprocessable_entity
		end
	end

	def destroy
		current_user.rooms.find(params[:id]).destroy
		render json: { message: 'Deleted Room!' }
	end

	private
	def room_params
		params.require(:room).permit(:name, :description)
	end

end
