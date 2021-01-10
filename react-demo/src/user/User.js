import { Component } from "react";

class User extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return <div>User</div>
    }
}

export default User;