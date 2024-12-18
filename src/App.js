import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <label aria-label="program">Programs</label>
      <label aria-label="prog1">Test1</label>
      <label aria-label="prog1">Test2</label>
      <label aria-label="prog1">Test3</label>
      <label data-testid="myid">Test4</label>
      <button data-testid="button1">Click Me</button>
    </div>
  );
}

export default App;
