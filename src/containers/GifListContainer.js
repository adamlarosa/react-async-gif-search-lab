import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    searchSubmit = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({ search: json.data })
            })
    }

    render() {
        return(
            <div>              
                < GifSearch searchSubmit={this.searchSubmit}/>
                < GifList pics={this.state.search}/>
            </div>
        )
    }
}
export default GifListContainer 