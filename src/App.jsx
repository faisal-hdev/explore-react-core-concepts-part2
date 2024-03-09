import "./App.css";
import Counter from "./Counter";
import Team from "./Team";

function App() {
  function handleClicked() {
    alert("button clicked");
  }
  function handleClicked2() {
    alert("button 2 clicked");
  }

  return (
    <>
      <h3>Vite + React core concepts 2</h3>
      <Team />

      <Counter></Counter>
      <button onClick={handleClicked}>Click Me</button>
      <button onClick={handleClicked2}>Clicked2</button>
      <button
        onClick={() => {
          alert("Third clicked");
        }}
      >
        Clicked2
      </button>
    </>
  );
}

export default App;
