import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "../ducks/History";
import { PrivateRoute } from "../ducks/PrivateRoute";
import { useSelector } from "react-redux";

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
  const isLogged = useSelector(state => state.auth.isLogged);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact path="/home" component={Home} auth={isLogged} />
            <Redirect from="/" to="login" />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
