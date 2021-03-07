import React, { Component } from 'react'

class TernaryOperatorRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        };
    }

    render() {
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Gunt with LogIn (Ternary conditional operator)</div> :
        //         <div>Welcome Gunt without LogIn (Ternary conditional operator)</div>
        // );

        return this.state.isLoggedIn ? (
            <div>
                <h2 style={{ color: "yellow" }}>Ternary conditional operator</h2>
                <div>Welcome Gunt with LogIn (Ternary conditional operator)</div>
            </div>
        ) : (
            <div>
                <h2 style={{ color: "yellow" }}>Ternary conditional operator</h2>
                <div>Welcome Gunt without LogIn (Ternary conditional operator)</div>
            </div>
        );
    }
}

export default TernaryOperatorRender
