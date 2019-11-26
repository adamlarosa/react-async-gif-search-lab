import React, { Component } from 'react'

class GifList extends Component {
    render() {
        return(
            <div align='left'>
                {this.props.pics && this.props.pics.slice(0, 3).map(pic => {
                    return <img src={pic.images.original.url} alt=''/>
                })}              
            </div>
        )
    }
}
export default GifList