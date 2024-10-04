import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bubble from "./ui/atoms/Bubble";
import Home from "./ui/organisms/home.organism";
import Header from "./ui/molecules/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <Header></Header>
        <Home />
    </>
  );
}

export default App;
