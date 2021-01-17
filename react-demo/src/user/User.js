import { Component } from "react";
import axios from 'axios';

class User extends Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        console.log('componentDidMount');
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log('result', result);
        this.setState({ data: result.data });
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
            // <div>User {name} From AppComponent
            //     <div>
            //         <input type="text" onChange={this.onChange} />
            //     </div>
            // </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(user => {
                            return (<tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User;