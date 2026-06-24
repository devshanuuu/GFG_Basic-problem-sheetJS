//--Main.jsx--//

import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(

  document.getElementById("root")

);

root.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);

//--App.jsx--//

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>My First React App</p>
    </div>
  );
}

export default App;