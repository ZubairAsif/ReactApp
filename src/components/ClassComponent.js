import React, { Component } from 'react'

class Welcome extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Welcome Message'
        }
    }
    changeText(){
        this.setState({
            message : "Thank You for subscribing."
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeText()}>Subscribe</button>
            </div>
        ) 
    }
}
export default Welcome