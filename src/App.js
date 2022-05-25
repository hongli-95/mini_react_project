import React from "react";
import "./App.css";
import Top from "./components/Top";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Top />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
