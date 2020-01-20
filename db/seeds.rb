1.times do
    room = Room.create(
        user_id: 1,
        name: 'Rock Room',
        description: 'This room rocks'),

    1.times do
        Playlist.create(
            room_id: room.id,
            name: '90s Rock',
            description: 'playlist stuff',
            explicit: true,
        )
    1.times do
        Playlist.create(
            room_id: room.id,
            name: '80s Rock',
            description: 'playlist stuff',
            explicit: true,
        )
    1.times do
        Playlist.create(
            room_id: room.id,
            name: '50s Rock',
            description: 'playlist stuff',
            explicit: false
        )
    end
    end
    end
end

1.times do
    room = Room.create(
        user_id: 1,
        name: 'Pop Room',
        description: 'This room is popular'),

    1.times do
        Playlist.create(
            room_id: room.id,
            name: '90s Pop',
            description: 'playlist stuff',
            explicit: true,
        )
    1.times do
        Playlist.create(
            room_id: room.id,
            name: '80s Pop',
            description: 'playlist stuff',
            explicit: true,
        )
    1.times do
        Playlist.create(
            room_id: room.id,
            name: '2000s Pop',
            description: 'playlist stuff',
            explicit: false
        )
    end
    end
    end
end

puts "Data seeded"