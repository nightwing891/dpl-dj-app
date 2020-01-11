import React, { Component } from 'react'

class RoomShow extends Component {
    render() {
        const { name, description } = this.props
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