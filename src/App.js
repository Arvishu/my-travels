import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          destination="las vegas"
          country="America"
          photo="https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/gettyrf_518150115_0.jpg?itok=Tn_DZyxf"
          distance=" 9 322 Km"
        />
        <Travel
          destination="Bangkok"
          country="Thailande"
          photo="https://media.routard.com/image/15/3/fotolia-98443741-m.1461153.w740.jpg"
          distance=" 9 365 Km"
        />
      </div>
    );
  }
}

export default App;