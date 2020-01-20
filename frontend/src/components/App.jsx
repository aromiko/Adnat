import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "../ducks/History";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3FAFD7"
    },
    secondary: {
      main: "#11cb5f"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/login" redirect component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
