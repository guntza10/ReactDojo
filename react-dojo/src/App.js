import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropDemo from './components/PropDemo';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Component Type</h1>
      <FunctionalComponent />
      <ClassComponent />

      <h1 style={{ color: "red" }}>Props</h1>
      <h2 style={{ color: "yellow" }}>Function Props</h2>
      <PropDemo name="Akuma" heroName="Ironman" >
        <p>This is Child Component</p>
      </PropDemo>
      <PropDemo name="Gunt" heroName="Batman" >
        <button>Action</button>
      </PropDemo>
      <PropDemo name="Mari" heroName="Aquareman" />
      <h2 style={{ color: "yellow" }}>Class Props</h2>
      <ClassComponent name="Copter" heroName="Wolverine" />
      <ClassComponent name="Rose" heroName="Wonderwomen" />

      <h1 style={{ color: "red" }}>State</h1>
      <Message />

      <h1 style={{ color: "red" }}>setState</h1>
      <Counter />
    </div>
  );
}

export default App;
