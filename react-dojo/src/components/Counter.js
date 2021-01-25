import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('after setState done!1');
            console.log('count', this.state.count);
        });
        console.log('after setState done!2');
    }

    incrementWithPreviousState() {
        this.setState((prevState) => ({
            count2: prevState.count2 + 1
        }), () => {
            console.log('after setState with prevState done!', this.state.count2);
        });

        this.setState((prevState, props) => ({
            count2: prevState.count2 + props.addValue
        }));
    }

    incrementFive() {
        this.incrementWithPreviousState();
        this.incrementWithPreviousState();
        this.incrementWithPreviousState();
        this.incrementWithPreviousState();
        this.incrementWithPreviousState();
    }

    // render() {
    //     return (
    //         <div>
    //             <div> Count - {this.state.count}</div>
    //             <button onClick={() => this.increment()}>Increment</button>
    //             <div> Count2 - {this.state.count2}</div>
    //             <button onClick={() => this.incrementFive()}>IncrementFive</button>
    //         </div>
    //     )
    // }

    // Destructuring State Class
    render() {
        const { count, count2 } = this.state;
        return (
            <div>
                <div> Count - {count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <div> Count2 - {count2}</div>
                <button onClick={() => this.incrementFive()}>IncrementFive</button>
            </div>
        )
    }
}

export default Counter
