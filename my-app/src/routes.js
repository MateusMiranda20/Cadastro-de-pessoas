import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./containers/Home/App";
import Users from "./containers/Users/App";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/usuarios" Component={Users} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
