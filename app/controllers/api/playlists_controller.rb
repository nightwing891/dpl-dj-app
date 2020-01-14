class Api::PlaylistsController < ApplicationController
  before_action :set_room

  def index 
    render json: @room.playlists
  end

  def create
    @playlist = @room.playlists.new(playlist_params)
    if @playlist.save
      render json: @playlist
    else 
      render json: {errors: @playlist.error}, status: :unproccessable_entity
    end
  end

  def update
    @playlist = @room.playlists.find(params[:id])
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: {errors: @playlist.error}, status: :unproccessable_entity
    end
  end


  def destroy
    @room.playlists.find(params[:id]).destroy
    render json: {message: 'Playlist Deleted'}
  end


  private

  def set_room
    @room = Room.find(params[:room_id])
  end

  def playlist_params
    params.require(:playlist).permit(:name, :description, :explicit)
  end


end


