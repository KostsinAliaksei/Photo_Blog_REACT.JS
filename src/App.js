import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Clients from "./Components/Clients/Clients";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Clients/>
      <Portfolio/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
