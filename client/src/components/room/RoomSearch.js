import React, { Component } from 'react';
import { Form, Input  } from 'semantic-ui-react';
import axios from 'axios';

class RoomSearch extends Component {
    state = { search: "", rooms: [], filteredRooms: [], "value": "" }

    handleInputChange = event => {
        const search = event.target.value

        this.setState(prevState => {
            const filteredRooms = prevState.rooms.data.filter(element => {
                return element.name
            })

            return {
                search,
                filteredRooms
            }
        })
    }

    getRooms = () => {
        axios.get('/api/rooms')
        .then(rooms => {
            const filteredRooms = rooms.data.filter(element => {
                return element.name
            })
            this.setState({
                rooms,
                filteredRooms
            })
        })
    }

    componentWillMount() {
        this.getRooms()
    }
    
    render() {
        return(
            <div className="room-search">
                <Form>
                    <Input 
                        placeholder="Find a room..."
                        value={this.state.search}
                        onChange={this.handleInputChange}
                    />
                </Form>
            </div>
        )
    }

}

export default RoomSearch;