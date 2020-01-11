import React, { Component } from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import { Form, Button } from 'semantic-ui-react';

class RoomForm extends Component {
    state = {
        name: '',
        description: ''
    }

    componentDidMount() {
        if (this.props.id) {
            const { name, description } = this.props
            this.setState({ name, description })
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.id) {
            this.props.updateRoom( this.props.id, this.state )
            this.props.toggleEdit()
        }
        else {
            this.props.addRoom(this.state)
            this.props.toggleAdd()
        }
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        const { name, description } = this.state
        return(
        <div>
            <Form onSubmit={this.handleSubmit}> 
                <Form.Input 
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    label='Name'
                />
                <Form.Input 
                    name='description'
                    value={description}
                    onChange={this.handleChange}
                    label='Description'
                    />
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
        )
    }
}

const ConnectedRoomForm = (props) => {
    return(
        <RoomConsumer >
        {
            value => (
                <RoomForm 
                    {...props}
                    rooms={ value.rooms }
                    addRoom={ value.addRoom }
                    updateRoom={ value.updateRoom }
                />
            )
        }
        </RoomConsumer>
    )
}
export default ConnectedRoomForm;