import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count : 0
        }
    }

    makeIncrement(){
        // this.setState(
        //     {
        //     count : this.state.count + 1
        //     }, 
        //     ()=> {
        //         console.log('Callback Value', this.state.count)
        //     }
        // )
        // console.log(this.state.count)
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.makeIncrement()
        this.makeIncrement()
        this.makeIncrement()
        this.makeIncrement()
        this.makeIncrement()
    }

    render() {
        const {name} = this.props
        return(
            <div>
                 Count - {this.state.count}
                 <h1>{name}</h1>
                 <button onClick = {()=> this.incrementFive()}>Increment</button>
            </div>
        ) 
    }
}

export default Counter