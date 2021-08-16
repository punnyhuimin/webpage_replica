import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import Paper from "@material-ui/core/Paper";
import theme from "../theme";

const useStyles = makeStyles({
    root: {
        // minWidth: 200,
        // minHeight: 400,
        borderRadius: "1em",
        flexGrow: 1,
        textAlign: "center"
    },
    content: {
        flex: '1 0 auto',
    },
    title: {
        backgroundColor: 'blue',
        borderRadius: "1em",

    },
    pos: {
        padding: 12,
    },
    paper: {
        width: "40vw",
        height: "50vh",
        textAlign: 'center',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        borderRadius: "1em",
        backgroundColor: "white",
        borderColor: "magenta",
        borderStyle: "dashed",
    },
    details: {
        backgroundColor: "blue",
        textAlign: 'left',
        borderColor: "cyan",
        border: '5px solid'
    },
    calls: {
        backgroundColor: "blue",
        textAlign: 'left',
        borderColor: "beige",
        border: '5px solid'
    },
    messages: {
        backgroundColor: "blue",
        textAlign: 'left',
        borderColor: "magenta",
        border: '5px solid'
    },
    button: {
        backgroundColor: "white",
        borderRadius: "2em",
        textTransform: "none",
    },
});

function PlanDetailsBase() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Paper className={classes.paper} variant="outlined">
                <div className="container">
                    <div className="center">
                        <Grid item xs={12}>
                            <Typography variant="h3">Choose another plan to view</Typography>
                        </Grid>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default PlanDetailsBase;