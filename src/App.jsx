import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Middle from "./assets/components/Middle";
import Footer from "./assets/components/Footer";

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
