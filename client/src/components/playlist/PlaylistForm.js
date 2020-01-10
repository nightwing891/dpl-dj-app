import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { PlaylistConsumer } from '../../providers/PlaylistProvider';


class PlaylistForm extends Component {
  state = { name: '', description: '', explicit: null }


  componentDidMount() {
    if (this.props.id) {
      const { name, description, explicit } = this.props
      this.setState({ name, description, explicit })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventdefault()
    if (this.props.id) {
      this.props.updatePlaylist( this.props.id, this.state )
      this.props.toggleEdit()
    } else {
      this.props.addPlaylist(this.state)
      this.props.toggleAdd()
    }
    this.setState({ name: '', description: '', explicit: null })
  }

  render() {
    return(
      <>
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
          <Form.Select
            name='explicit'
            value={explicit}
            onChange={this.handleChange}
            options={ex}
            label='Explicit'
          />

          <Button type='sumbit' color='green'>Submit</Button>
        </Form>
      </>
    )
  }
}

const ConnectedPlaylistForm = (props) => {
  return (
    <PlaylistConsumer>
      { value => (
        <PlaylistForm
        {...props}
        playlists={ value.playlists }
        addPlaylist={ value.addPlaylist }
        updatePlaylist={ value.updatePlaylist }
        />
      )}

    </PlaylistConsumer>

  )
}

const ex = [
  { key: 'y', text: 'Yes', value: true },
  { key: 'n', text: 'Nah', value: false }
]


export default ConnectedPlaylistForm;


