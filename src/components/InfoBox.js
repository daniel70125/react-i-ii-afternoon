import React, { Component } from 'react'
import Info from './Info'
import Controls from './Controls'
import Data from '../Data'



class InfoBox extends Component {
    constructor(){
        super();

        this.state = {
            employees: Data,
            index: 0
        }

        this.nextPerson = this.nextPerson.bind(this);
        this.prevPerson = this.prevPerson.bind(this);
    }
    
    nextPerson(){
        console.log(`movies length: ${this.state.employees.length}`)
        if (this.state.index === this.state.employees.length - 1){
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    prevPerson(){
        if (this.state.index === 0){
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    render(){
        var movieslength = this.state.employees.length - 1;
        let movies = this.state.employees[this.state.index].favoriteMovies.map((e) => {
        return <li>{e}</li>
        })
        return (
            <div className="body">
                <div className="innerBox">
                <span className="span">{this.state.index} / {this.state.employees.length - 1}</span>
                <h5>{this.state.employees[this.state.index].name.first} {this.state.employees[this.state.index].name.last}</h5>
                <p><strong>From: </strong> {this.state.employees[this.state.index].city}, {this.state.employees[this.state.index].country} </p>
                <p><strong>Job Title: </strong> Associate</p>
                <p><strong>Employer: </strong> Skinix </p>

                <h3>Favorite Movies: </h3>
                <ol>
                    {movies}
                </ol>
                </div>
                <Controls next={this.nextPerson} prev={this.prevPerson} />
            </div>
        )
    }
}

export default InfoBox