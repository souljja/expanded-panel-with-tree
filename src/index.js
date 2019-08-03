import React from "react";
import ReactDOM from "react-dom";
import { LeftNavigationPanel } from './left-navigation-panel/left-navigation-panel.component';
import { SideBar } from './side-bar/side-bar.component';


import "./styles.css";

function App() {
  return (
    <div className="App">
      <LeftNavigationPanel/>
      <SideBar/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
