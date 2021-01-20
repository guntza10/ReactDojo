import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropDemo from './components/PropDemo';

function App() {
  return (
    <div className="App">
      <h1 style="color:red">Component Type</h1>
      <FunctionalComponent />
      <ClassComponent />
      <h1 style="color:red">Props</h1>
      <PropDemo name="Akuma" />
    </div>
  );
}

export default App;
