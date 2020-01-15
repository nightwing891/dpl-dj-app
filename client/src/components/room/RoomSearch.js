import React, { Component } from 'react';
import { Search, Grid, Header, Segment, GridColumn } from 'semantic-ui-react';

const initialState = { isLoading: false, rooms: [], "value": "" }

class RoomSearch extends Component {
    state = initialState

    handleResultSelect = ( e, { room }) => this.setState({ value: room.name })
    
    hdandleSearchChange = ( e, { value }) => {
        this.setState({ isLoading: true, value })
    }

    
    render() {
        const { isLoading, value, rooms } = this.state

        return(
            <Grid>
                <Grid.Column width={6}>
                    <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.hdandleSearchChange, 500, {
                        leading: true,
                    })}
                    rooms={rooms}
                    value={value}
                    {...this.props}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                    <Header>State</Header>
                    <pre style={{ overflowX: 'auto' }}>
                      {JSON.stringify(this.state, null, 2)}
                     </pre>
                     <Header>Options</Header>
                     <pre style={{ overflowX: 'auto' }}>
                       {JSON.stringify(source, null, 2)}
                     </pre>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }

}

export default RoomSearch;