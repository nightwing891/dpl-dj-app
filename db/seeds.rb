1.times do
    room = Room.create(
        name: 'Rock Room',
        description: 'This room rocks')

    3.times do
        Playlist.create(
            room_id: room.id,
            name: 'stuff',
            description: 'playlist stuff',
            explicit: true
        )
    end
end

puts "Data seeded"