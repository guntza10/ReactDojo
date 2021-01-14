import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import User from './user/User.js';

class App extends Component {
  // create state (state เป็น property ของ React ที่ได้มาจากการ inherit Component)
  state = {
    name: 'FutureSkill'
  };

  onNameChange = name => {
    // this.state.name = name;  วิธีนี้ทำไม่ได้ React ไม่อนุญาติให้ทำแบบนี้
    // set state ผ่าน  this.setState()
    this.setState({ name: name });
  };

  render() {
    const { name } = this.state;
    return <div>Hello {name}
      <User name={name} onNameChange={this.onNameChange} />
    </div>
  }
}

export default App;
