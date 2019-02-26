import { Route } from "react-router";
import * as React from "react";
import { withStyles, createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { User } from "oidc-client";
import RoutePaths from "./RoutePaths";
import LandingHeader from "./header/LandingHeader";
import LandingMenu from "./menu/LandingMenu";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
    },
    content: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
  });

interface LandingLayoutProps extends WithStyles<typeof styles> {
  component: any;
  exact: boolean;
  path: string;
}
type LandingLayoutState = {
  mobileOpen: boolean;
  showOpaqueHeader: boolean;
};

class LandingLayout extends React.Component<LandingLayoutProps, LandingLayoutState> {
  constructor(props: LandingLayoutProps) {
    super(props);
    if (window.location.pathname === RoutePaths.Landing) {
      this.state = { mobileOpen: false, showOpaqueHeader: false, slideIn: true };
    }
  }
  state = {
    mobileOpen: false,
    showOpaqueHeader: true,
    slideIn: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !this.state.mobileOpen }));
  };

  render() {
    const { classes, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          <div className={classes.root}>
            <CssBaseline />
            <LandingHeader handleDrawerToggle={this.handleDrawerToggle} {...props} />
            <main className={classes.content}>
              <Component {...props} />
            </main>
            <LandingMenu handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen} {...props} />
          </div>
        )}
      />
    );
  }
}

export default withStyles(styles)(LandingLayout);
