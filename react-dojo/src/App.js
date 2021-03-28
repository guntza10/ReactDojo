import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropDemo from "./components/PropDemo";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FuctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import MethodAsPropsParent from "./components/MethodAsPropsParent";
import IfElseRender from "./components/IfElseRender";
import ElementVarRender from "./components/ElementVarRender";
import TernaryOperatorRender from "./components/TernaryOperatorRender";
import ShortCircuitRender from "./components/ShortCircuitRender";
import NameList from "./components/NameList";
import StyleSheets from "./components/StyleSheets";
import InlineStyle from "./components/InlineStyle";
import Form from "./components/Form";

import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Component Type</h1>
      <FunctionalComponent />
      <ClassComponent />
      <h1 style={{ color: "red" }}>Props</h1>
      <h2 style={{ color: "yellow" }}>Function Props</h2>
      <PropDemo name="Akuma" heroName="Ironman">
        <p>This is Child Component</p>
      </PropDemo>
      <PropDemo name="Gunt" heroName="Batman">
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
      <h1 style={{ color: "red" }}>Event Handling</h1>
      <h2 style={{ color: "yellow" }}>Function</h2>
      <FunctionClick />
      <h2 style={{ color: "yellow" }}>Class</h2>
      <ClassClick />
      <h1 style={{ color: "red" }}>Binding Event Handlers</h1>
      <EventBinding />
      <h1 style={{ color: "red" }}>Method As Props</h1>
      <MethodAsPropsParent />
      <h1 style={{ color: "red" }}>Condition Rendering</h1>
      <IfElseRender />
      <ElementVarRender />
      <TernaryOperatorRender />
      <ShortCircuitRender />
      <h1 style={{ color: "red" }}>List Rendering</h1>
      <NameList />
      <h1 style={{ color: "red" }}>Styling and CSS Basics</h1>
      <StyleSheets primary={true} />
      <InlineStyle />
      <h2 className={styles.success}>CSS Modules</h2>
      <h1 style={{ color: "red" }}>Basics of Form Handling</h1>
      <Form />
    </div>
  );
}

export default App;
