import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = false;

  return (
    <div className="App">
      {/*CSS Global */}
      <h1>React com CSS</h1>
      {/*CSS de Componente */}
      <MyComponent />
      <p>Este parágrado é do App.jsx</p>
      {/*Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline!
      </p>
      {/*Inline CSS Dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste Nome
      </h2>
      {/*Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter classe dinâmica.
      </h2>
      {/*CSS Modules */}
      <Title />
    </div>
  );
}
export default App;
