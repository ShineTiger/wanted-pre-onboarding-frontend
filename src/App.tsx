import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import Todos from "./pages/Todos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<RequireAuth />}>
          <Route path="/todo" element={<Todos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
