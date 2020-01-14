import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

class RoomShow extends Component {
    state = { 
        name: '',
        description: ''
    }
    
    render() {
        const { name, description } = this.props.location.state
        return(
            <>
            <h1>{name}</h1>
            <br />
            <h4>{description}</h4>
          </>
        )
    }
}

export default RoomShow;