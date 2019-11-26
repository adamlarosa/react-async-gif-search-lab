import React, { Component } from 'react'

class GifSearch extends Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    inputField = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        const { searchSubmit } = this.props
        const { search } = this.state
        return(
            <div align='right'>
                <div>
                    Enter a Search Term:<br/>
                    <input onChange={this.inputField} type="text" name="name" /><br/>
                    <input onClick={() => searchSubmit(search)} type="submit" value="Find Gifs" />
                </div>
            </div>
        )
    }
}
export default GifSearch