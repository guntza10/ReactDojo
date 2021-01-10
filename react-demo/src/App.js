import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import User from './user/User.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// แบบเก่า
class App extends Component {
  render() {
    let name = "Gunt";
    return <div>Hello {name}
      <User />
    </div>
  }
}

export default App;
