import React, { Component } from 'react'

class ElementVarRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    render() {
        let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome Gunt with LogIn</div>;
        } else {
            message = <div>Welcome Gunt without LogIn</div>;
        }
        return (
            <div>
                <h2 style={{ color: "yellow" }}>Element Variables Render</h2>
                {message}
            </div>
        )
    }
}

export default ElementVarRender
