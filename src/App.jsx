import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./User";

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

      <Friends />
      <Users />

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
