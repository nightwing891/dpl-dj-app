import React, { Component } from 'react';
import axios from 'axios';

export const RoomContext = React.createContext();
export const RoomConsumer = RoomContext.Consumer;

class RoomProvider extends Component {
    state = { rooms: [] }

    getRooms = () => {
        axios.get('/api/rooms')
        .then( res => {
            this.setState({ rooms: res.data })
        })
        .catch( err => {
            console.log(err)
        })
    }

    addRoom = (room) => {
        axios.post('/api/rooms', room)
        .then( res => {
            const { rooms } = this.state
            this.setState({ rooms: [...rooms, res.data ]})
        })
        .catch( err => {
            console.log(err)
        })
    }

    updateRoom = (id, room) => {
        axios.put(`/api/rooms/${id}`, room)
        .then( res => {
            const rooms = this.state.rooms.map( r => {
                if (r.id === id) {
                    return res.data
                }
                return r
            })
            this.setState({ rooms })
            })
            .catch( err => {
                console.log(err)
            })
    }

    deleteRoom = (id) => {
        axios.delete(`/api/rooms/${id}`)
        .then(res => {
            const { rooms } = this.state
            this.setState({ rooms: rooms.filter( r => r.id !== id)})
        })
        .catch( err => {
            console.log(err)
        })
    }

    render() {
        return(
            <RoomContext.Provider value={{
                ...this.state,
                getRooms: this.getRooms,
                addRoom: this.addRoom,
                updateRoom: this.updateRoom,
                deleteRoom: this.deleteRoom
            }}>
                { this.props.children }
            </RoomContext.Provider>
        )
    }
}

export default RoomProvider;