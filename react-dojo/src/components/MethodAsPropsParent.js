import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild';

class MethodAsPropsParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName: "Gunt"
        };
        this.methodAsProps1 = this.methodAsProps1.bind(this);
        this.methodAsProps2 = this.methodAsProps2.bind(this);
    }

    methodAsProps1() {
        alert(`Hello ${this.state.parentName}`);
    }

    methodAsProps2(value) {
        alert(`Hello ${this.state.parentName} from ${value}`);
    }

    render() {
        return (
            <div>
                <MethodAsPropsChild methodAsProps1={this.methodAsProps1} methodAsProps2={this.methodAsProps2} />
            </div>
        )
    }
}

export default MethodAsPropsParent
