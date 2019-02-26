import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import { history } from "./src/History";
import Routes from "./src/components/Routes";
import createRiteTheme from "./src/theme/createMyTheme";
import "whatwg-fetch";
import "./polyfills/object-assign";
import "./polyfills/array-find";
import "./src/index.css";
import { ApplicationState } from "./src/stores";
import ReduxStore from "./src/ReduxStore";

const initialState = {} as ApplicationState;
ReduxStore.Configure(history, initialState);
const store = ReduxStore.getStore();

const theme = createRiteTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#ffa726",
    },
    text: {
      primary: "#000000",
    },
    background: {
      paper: "#FFFFFF",
      default: "#ededed",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

var routes = <Route path="*" render={props => <Routes {...props} />} />;

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <ConnectedRouter history={history} children={routes} />
      </SnackbarProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("app")
);
