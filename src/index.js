import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LeftNavigationPanel } from "./left-navigation-panel/left-navigation-panel.component";
import { SideBar } from "./side-bar/side-bar.component";
import { HeaderComponent } from "./header/header.component";

import "./styles.css";

const App = React.memo(() => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <LeftNavigationPanel />
      <HeaderComponent onOpen={handleOpen} />
      <SideBar open={open} />
    </div>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
