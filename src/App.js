import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
