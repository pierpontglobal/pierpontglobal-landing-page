import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import AppNav from "./components/AppNav/AppNav";
import { MuiThemeProvider } from "@material-ui/core";
import { defaultTheme, defaultColor } from "./Defaults";

/**
 * LandingPage App page
 *
 * @constructor
 * @author: hectorandac
 * @this {App}
 */
function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={defaultTheme}>
        <Router>
          <AppNav color={defaultColor("secondary")} />
          <Route path="/" exact component={LandingPage} />
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
