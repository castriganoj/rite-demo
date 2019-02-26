import * as React from "react";
import { withStyles, createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden, Typography, ButtonBase, Button, Slide } from "@material-ui/core";
import { User } from "oidc-client";
import { push } from "connected-react-router";
import { connect } from "react-redux";
const classNames = require("classnames");

const styles = (theme: Theme) =>
  createStyles({
    toolbarLeft: {
      flexGrow: 1,
      marginLeft: "40px",
    },
    toolbarRight: {
      marginRight: "40px",
    },
    appBarOpaque: {
      background: "white",
    },
    landingLink: {
      marginLeft: "17px",
      marginRight: "17px",
    },
    actionContainer: {
      display: "inline-flex",
    },
    signupButton: {
      background: "linear-gradient(135deg,  #ac6cc6 50%, #8f70c2 100%)",
      color: "white",
    },
    menuButton: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  });

interface LandingHeaderProps extends WithStyles<typeof styles> {
  handleDrawerToggle: () => void;
  push: typeof push;
}

type LandingHeaderState = {
  value: number;
};

class LandingHeader extends React.Component<LandingHeaderProps, LandingHeaderState> {
  state: LandingHeaderState = {
    value: 0,
  };

  handleLogoClick = () => {
    this.props.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <Slide in direction="down" timeout={1500}>
        <AppBar position="fixed" className={classes.appBarOpaque}>
          <Toolbar>
            <div className={classes.toolbarLeft}>
              <Button onClick={this.handleLogoClick}>
                <Typography variant="h6">Rite Demo</Typography>
              </Button>
            </div>
            <Hidden smDown implementation="css">
              <div className={classes.toolbarRight}>
                <ButtonBase classes={{ root: classes.landingLink }}>
                  <Typography variant="subtitle1">Welcome!</Typography>
                </ButtonBase>
                <ButtonBase classes={{ root: classes.landingLink }}>
                  <Typography variant="subtitle1">Some thing</Typography>
                </ButtonBase>
                <ButtonBase classes={{ root: classes.landingLink }}>
                  <Typography variant="subtitle1">Some other thing</Typography>
                </ButtonBase>
              </div>
            </Hidden>
            <IconButton className={classes.menuButton} aria-label="Menu" onClick={this.props.handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>
    );
  }
}

export default withStyles(styles)(
  connect(
    null,
    { push }
  )(LandingHeader)
);
