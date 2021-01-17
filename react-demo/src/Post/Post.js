import { Component } from "react";
import axios from 'axios';

class Post extends Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        console.log('componentDidMount');
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
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
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>userId</td>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(user => {
                            return (<tr>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Post;