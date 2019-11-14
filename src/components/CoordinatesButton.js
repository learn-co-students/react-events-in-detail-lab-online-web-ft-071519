import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    // constructor(props) {
    //     super()
    //     this.props.onReceiveCoordinates = props.onReceiveCoordinates
    // }

    handleClick = (e) => {
        let x = e.clientX
        let y = e.clientY
        let array = [x,y]
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return <button onClick={this.handleClick}></button>
    }

}