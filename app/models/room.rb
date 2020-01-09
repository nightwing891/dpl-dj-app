class Room < ApplicationRecord
  belongs_to :user
  has_many :playlists, dependent: :destroy
end
