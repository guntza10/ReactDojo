import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello World'
        };

        this.clickHandler2 = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye World'
        });
    }

    clickHandler3 = () => {
        this.setState({
            message: 'Goodbye World'
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* bind(this) */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* arrow function */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* binding in class constructor */}
                <button onClick={this.clickHandler2}>Click</button>

                {/* expression function */}
                {/* <button onClick={this.clickHandler3}>Click</button> */}
            </div>
        )
    }
}

export default EventBinding;
