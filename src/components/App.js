import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";

function App() {
  const [id, setId] = useLocalStorage("id"); // How does setId work here? There's no useState hook in App.js component...

  // ???
  // [value, setValue] is set to [id, setId], so setId runs setValue inside of useLocalStorage() which then sets State?

  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
