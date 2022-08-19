import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
