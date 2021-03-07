import React, { Component } from 'react'

class ShortCircuitRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        };
    }

    render() {
        return this.state.isLoggedIn &&
            (
                <div>
                    <h2 style={{ color: "yellow" }}>Short circuit operator</h2>
                    <div>Welcome Gunt with LogIn</div>
                </div>
            );
    }
}

export default ShortCircuitRender
