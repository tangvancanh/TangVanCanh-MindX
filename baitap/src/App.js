import "./App.css";
import Ex1 from "./components/Ex1";
import Ex2 from "./components/Ex2";
import Ex3 from "./components/Ex3";

function App() {
  const array1 = [2, 3, -5, -2, 4];
  const array2 = [60, 40, 55, 75, 64];

  return (
    <>
      <h1>Bai 1</h1>
      <Ex1 array={array1} />
      <h1>Bai 2</h1>
      <Ex2 array={array2} />
      <h1>BAi 3</h1>
      <Ex3 />
    </>
  );
}

export default App;
