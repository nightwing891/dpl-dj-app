import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

const SongSuggestions = ({results, query, toggle}) => {
    if(results && results.length > 0) {  
        const options = results.map( r => {
            const regex = new RegExp(query, 'gi')
            const { title, artist } = r
            const songs = axios.get(`https://api.spotify.com/v1/tracks/${r.id}`)
                .then( response => {
                    return response.data
                })
                .catch( err => {
                    console.log(err)
                })
            const add = axios.post(`https://api.spotify.com/v1/tracks/${r.id}`)
                    .then( response => {
                        return response.data
                    })
                    .catch( err => {
                        console.log(err)
                    })
            if (r.name.match(regex))
                return(<li key={r.id}>
                    <p>{r.title}</p>
                    <p>{r.artst}</p>                 
                    <Form action={add} method='post'>
                    <Button type='submit' onClick={toggle} formmethod='post'>
                        Add To Playlist
                    </Button>
                    </Form>
                </li>)
        })
        return <ul>{options}</ul>
    }
    return <></>
}

export default SongSuggestions;