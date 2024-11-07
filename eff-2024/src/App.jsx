import expretsData from "./data";
import Expert1 from "./expert1";
import Experts2 from "./expert2";
import Formulaire from "./Formulaire";

function App() {
  return (
    <>
      <h1 className="bg-blue-950 font-bold text-white text-6xl py-10 text-center rounded">EFF-2024-React(front-end)</h1>
      <Expert1 Data={expretsData}/>
      <Formulaire/>
      <Experts2/>
    </>
  );
}

export default App;
