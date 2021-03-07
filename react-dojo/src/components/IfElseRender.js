import React, { Component } from 'react'

class IfElseRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        };
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h2 style={{ color: "yellow" }}>If Else Render</h2>
                    <div>Welcome Gunt with LogIn</div>
                </div>
            );
        } else {
            return (
                <div>
                    <h2 style={{ color: "yellow" }}>If Else Render</h2>
                    <div>Welcome Gunt without LogIn</div>
                </div>
            );
        }
        // return (
        //     <div>
        //         <h2 style={{ color: "yellow" }}>If Else Render</h2>
        //         <div>Welcome Gunt with LogIn</div>
        //         <div>Welcome Gunt without LogIn</div>
        //     </div>
        // )
    }
}

export default IfElseRender
