import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="mainView">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
