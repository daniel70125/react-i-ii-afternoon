import React, { Component } from 'react'


class Controls extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
            <div className="controlsDiv">
                <button onClick={this.props.prev}> Prev </button>
                <button className="float" onClick={this.props.next}> Next </button>
            </div>
        )
    }
}

export default Controls