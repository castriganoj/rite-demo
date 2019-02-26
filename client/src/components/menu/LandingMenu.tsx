import * as React from "react";
import {
  Drawer,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  List,
  ListItemText,
  Divider,
  Hidden,
  ListItem,
  ListItemIcon,
  Typography,
  Button,
} from "@material-ui/core";
import { Home, GpsFixed, ArrowForward, Equalizer } from "@material-ui/icons";
const classNames = require("classnames");

const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: theme.drawer.width,
      // background: styledBy('color', {
      //     default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      //     blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      //   }),
      backgroundImage: "linear-gradient(-135deg, #b230ae 0%, #E94057 30%, #F27121 80%)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&::before": {
        width: "100%",
        height: "100%",
        content: "''",
        display: "block",
        opacity: 0.23,
        position: "absolute",
        background: "#000000",
      },
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
    logoContainer: { position: "relative", ...theme.mixins.toolbar },
    divider: {
      position: "relative",
      backgroundColor: "rgba(180, 180, 180, 0.3)",
      margin: "auto",
      width: "90%",
    },
    listItemHover: {
      height: theme.toolbar.height,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    menuButton: {
      margin: "auto",
      width: "70%",
    },
    menuItemTextColor: {
      color: theme.drawer.text.color,
    },
  });
interface LandingMenuProps extends WithStyles<typeof styles> {
  theme: Theme;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

type LandingMenuState = {
  accountListItemExpanded: boolean;
};

class LandingMenu extends React.Component<LandingMenuProps, LandingMenuState> {
  state: LandingMenuState = {
    accountListItemExpanded: false,
  };

  toggleExpanded = () => {
    this.setState(prevState => ({
      accountListItemExpanded: !prevState.accountListItemExpanded,
    }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawerContent = (
      <div>
        <div className={classes.logoContainer}>
          <Button href="/">
            <Typography className={classes.menuItemTextColor} align="center" variant="h5" color="textSecondary">
              Rite Demo
            </Typography>
          </Button>
        </div>
        <Divider className={classes.divider} />
        <List>
          <ListItem classes={{ button: classes.listItemHover }} button href="#overview">
            <ListItemIcon>
              <Home nativeColor={theme.drawer.text.color} />
            </ListItemIcon>
            <ListItemText primary="Overview" classes={{ primary: classes.menuItemTextColor }} />
          </ListItem>
          <ListItem classes={{ button: classes.listItemHover }} button href="#something">
            <ListItemIcon>
              <GpsFixed nativeColor={theme.drawer.text.color} />
            </ListItemIcon>
            <ListItemText primary="Some thing" classes={{ primary: classes.menuItemTextColor }} />
          </ListItem>
          <ListItem classes={{ button: classes.listItemHover }} button href="#someotherthing">
            <ListItemIcon>
              <ArrowForward nativeColor={theme.drawer.text.color} />
            </ListItemIcon>
            <ListItemText primary="Some other thing" classes={{ primary: classes.menuItemTextColor }} />
          </ListItem>
        </List>
      </div>
    );

    return (
      <Hidden mdUp implementation="css">
        <nav>
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.props.mobileOpen}
            onClose={this.props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawerContent}
          </Drawer>
        </nav>
      </Hidden>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LandingMenu);
