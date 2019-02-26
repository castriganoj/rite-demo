import * as React from "react";
import { Theme, createStyles, WithStyles, withStyles, Grid, Typography, Button, Slide } from "@material-ui/core";
import classNames from "classnames";

const styles = (theme: Theme) =>
  createStyles({
    typography: {
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
      textAlign: "center",
    },
    gridHeight: {
      height: "100%",
    },
    menuItemTextColor: {
      color: theme.drawer.text.color,
    },
    signupButton: {
      marginTop: "60px",
      minWidth: "175px",
      background: "linear-gradient(135deg,  #ac6cc6 50%, #8f70c2 100%)",
      color: "white",
    },
    readTheDocsButton: {
      background: "white",
      marginTop: "60px",
      minWidth: "150px",
    },
  });

interface OverviewLayerProps extends WithStyles<typeof styles> {}

class OverviewLayer extends React.Component<OverviewLayerProps> {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.gridHeight} container alignContent="center" justify="center">
        <Grid item xs={1} />
        <Grid item md={5} xs={10}>
          <Slide in direction="right" timeout={1500}>
            <div>
              <Typography gutterBottom className={classNames(classes.typography, classes.menuItemTextColor)} variant="h3">
                THIS IS THE RITE DEMO
              </Typography>
              <Typography className={classNames(classes.typography, classes.menuItemTextColor)} variant="h5">
                DOWNLOAD THE SOURCE FROM GITHUB
              </Typography>
              <Button color="primary" variant="contained" href="https://github.com/nick-cromwell/rite-demo" className={classes.signupButton}>
                <Typography className={classes.menuItemTextColor} variant="subtitle1">
                  Click here to download
                </Typography>
              </Button>
            </div>
          </Slide>
        </Grid>
        <Grid item md={6} xs={1} />
      </Grid>
    );
  }
}

export default withStyles(styles)(OverviewLayer);
