import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor (props) {
        super (props)
        this.state = {number:0}

        this.handleIncrement = ()=>{
            this.setState ({number:this.state.number +5})
        }

        this.handleDecrement = ()=>{
            this.setState ({number:this.state.number -10})
    }

    }
  render() {
    return (
      <div>
         <h1>Counter App</h1>
      <h1>Counter: {this.state.number} </h1>
      <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Drecrement</button>
      </div>
    )
  }
}

export default ClassComponent


/* Note: objects take on key pairs a name and a value eg {age: 35}  */
// we don't have to mutate so we have to create a state for it and call it}