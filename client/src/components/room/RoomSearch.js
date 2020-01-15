import React, { Component } from 'react';
import { Form, Input  } from 'semantic-ui-react';
import axios from 'axios';
import RoomSuggestions from './RoomSeachSuggestions';

class RoomSearch extends Component {
    state = { query: "", rooms: [] }

    toggle = () => {
        this.setState({rooms: []})
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 0) {
                this.getRooms()
            }
            else {this.toggle()}
        })
    }

    getRooms = () => {
        axios.get('/api/rooms')
        .then( data => {
            this.setState({
                rooms: data.data 
            })
        })
        .catch( err => {
            console.log(err)
        })
    }
    
    render() {
        return(
            <div className="room-search">
                <Form>
                    <Input 
                        placeholder="Find a room..."
                        ref={input => this.search = input}
                        value={this.state.search}
                        onChange={this.handleInputChange}
                    />
                    <RoomSuggestions toggle={this.toggle} rooms={this.state.rooms} query={this.state.query}/>
                </Form>
            </div>
        )
    }
}

export default RoomSearch;