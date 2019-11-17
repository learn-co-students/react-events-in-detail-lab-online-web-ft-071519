import React, { Component } from "react";

export default class DelayedButton extends Component {

    delayedConsoleLog = (event) => {
        event.persist();
        // const eventLog = event
        console.log(event)
        return setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render() {
        // console.log(this.props)
        return (
            <button onClick={this.delayedConsoleLog}>DelayedButton</button>
        )
    }
}