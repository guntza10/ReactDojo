import React, { Component } from 'react';

class ClassClick extends Component {
    clickHandler() {
        console.log('Button Clicked! in Class');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click in Class</button>
            </div>
        );
    }
}

export default ClassClick;
