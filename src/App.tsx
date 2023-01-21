import { useState } from "react";
import "./App.css";
import { ParallaxContainer } from "./components/ParallaxContainer";
import { ParallaxLayer } from "./components/ParallaxLayer";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ParallaxContainer />
    </div>
  );
};

export default App;
