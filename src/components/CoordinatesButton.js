/* 
<CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
*/

import React, { Component } from "react";

export default class CoordinatesButton extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         mouseCoordinates: this.props.onReceiveCoordinates
    //     }
    // }

    setCoordinates = (event) => {
        // event.preventDefault();
        let mouseCoordinates = [];
        let x = event.clientX;
        let y = event.clientY;

        mouseCoordinates.push(x);
        mouseCoordinates.push(y);
        console.log(mouseCoordinates)
        return this.props.onReceiveCoordinates(mouseCoordinates)    
    }
 
    render() {
        // console.log(this.props)
        return (
            <button onClick={this.setCoordinates}>Set Coordinates</button>
        )
    }
}