import { Component } from "react";

class User extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    onChange = event => {
        console.log(event.target.value);
        this.props.onNameChange(event.target.value);
    };

    render() {
        console.log('render');
        // const name = this.props.name;
        const { name } = this.props;
        return (
            <div>User {name} From AppComponent
                <div>
                    <input type="text" onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

export default User;