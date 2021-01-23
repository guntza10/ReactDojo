import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        console.log('class props', this.props);
        return <h2>Hello {this.props.name} A.K.A {this.props.heroName} From Class Component</h2>
    }
}

export default ClassComponent;