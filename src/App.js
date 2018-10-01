import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


import Travels from "./Travels"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Travels
          destination="las vegas"
          country="America"
          photo="https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/gettyrf_518150115_0.jpg?itok=Tn_DZyxf"
          distance=" 9 322 Km"
        />
        
      </div>
    );
  }
}

export default App;