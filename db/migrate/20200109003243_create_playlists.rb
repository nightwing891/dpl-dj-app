class CreatePlaylists < ActiveRecord::Migration[6.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :description
      t.boolean :explicit
      t.belongs_to :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
