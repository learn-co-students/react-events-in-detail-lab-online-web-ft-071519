import React, {Component} from 'react';

export default class DelayedButton extends Component {
    handleClick = (event) => setTimeout(() => {
        event.persist();
        this.props.onDelayedClick(event, this.props.delay)
    })

    render() {
        return <button onClick={this.handleClick}></button>
    }

}