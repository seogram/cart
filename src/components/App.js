import React from "react";
import Cart from "./Cart";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => {
  return (
    <div>
      <MuiThemeProvider>
        <Cart />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
