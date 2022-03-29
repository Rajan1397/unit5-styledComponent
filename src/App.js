import "./App.css";
import React from "react";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button theme={"primary"}>
        <h1>Primary Button</h1>
      </Button>
      {/*This Button is button only but with CSS*/}
      <Button theme={"default"}>
        <h1>Default Button</h1>
      </Button>
      <Button theme={"dashed"}>
        <h1>Dashed Button</h1>
      </Button>
      <br />
      <Button theme={"text"}>
        <h1>Text Button</h1>
      </Button>
      <Button theme={"link"}>
        <h1>Link Button</h1>
      </Button>
    </div>
  );
}

export default App;
