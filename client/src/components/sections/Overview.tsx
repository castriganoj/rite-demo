import * as React from "react";
import { withStyles, createStyles, Theme, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
    createStyles({
        appBarPush: {
            height: theme.toolbar.height,
            width: "100%",
        },
        imagesContainer: {
            backgroundImage: "linear-gradient(-45deg, #b230ae 0%, #e94057 30%, #f27121 80%)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100%",
            width: "100%",
            opacity: 0.5,
        },
    });

interface OverviewProps extends WithStyles<typeof styles> {}

class Overview extends React.Component<OverviewProps> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.imagesContainer}>
                <div className={classes.appBarPush} />
            </div>
        );
    }
}

export default withStyles(styles)(Overview);
