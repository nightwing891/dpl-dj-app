import React, { Component } from 'react';
import { Form, Input  } from 'semantic-ui-react';
import axios from 'axios';
import SongSuggestions from './SongSuggestions';

class SongSearch extends Component {
    state = { query: "", results: [] }

    toggle = () => {
        this.setState({results: []})
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => {
            if (this.state.query && this.state.query.length > 0) {
                this.getResults()
            }
            else {this.toggle()}
        })
    }

    getResults = () => {
        axios.get('https://api.spotify.com/v1/search', this.state.query) //add spotify 
        .then( response => {
            return response.data
        })
        .catch( err => {
            console.log(err)
        })
    }
    
    render() {
        return(
            <div className="song-search">
                <Form>
                    <Input 
                        placeholder="Search..."
                        name='query'
                        value={this.state.search}
                        onChange={this.handleInputChange}
                    />
                    <SongSuggestions toggle={this.toggle} rooms={this.state.results} query={this.state.query}/>
                </Form>
            </div>
        )
    }
}

export default SongSearch;