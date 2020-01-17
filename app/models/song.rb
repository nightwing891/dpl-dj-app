class Song < ApplicationRecord

	def self.new_from_spotify_track(spotify_track)
    Song.new(
      spotify_id: spotify_track.id,
      name: spotify_track.name,
      artists: spotify_track.artists[0].name,
      image: spotify_track.album.images[0]["url"],
      
    )
	end

	def self.create_from_spotify_track(spotify_track)
    song = self.new_from_spotify_track(spotify_track)
    song.save
    song
	end
end
