import { useState } from "react";
import Board from "./components/Board"
import Nav from "./components/Nav"


const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Nav setCategory={setCategory}/>
      <Board category={category}/>
    </div>
  )
}

export default App