// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component{
    handleClick = (event) => {
        // this.props.onDelayedClick()
        console.log("handleClick")
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)

        }, this.props.delay)
    }
    
    render(){

        return <button onClick={this.handleClick}>DelayedButton</button>
    }
}

export default DelayedButton
