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
import Box from "@material-ui/core/Box";

import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import CallIcon from '@material-ui/icons/Call';
import MessageIcon from '@material-ui/icons/Message';
import DescriptionIcon from '@material-ui/icons/Description'
import theme from "../theme";

const useStyles = makeStyles({
    root: {
        // minWidth: 200,
        // minHeight: 400,
        borderRadius: "1em",
        flexGrow: 1,
    },
    title: {
        padding: 0,
    },
    pos: {
        padding: 10,
    },
    paper: {
        width: "40vw",
        height: "50vh",
        textAlign: 'center',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        borderRadius: "1em",
        backgroundColor: "blue",

    },
    details: {
        backgroundColor: "blue",
        textAlign: 'left',
        padding: 0,
        borderColor: "cyan",
        border: '5px solid'
    },
    calls: {
        backgroundColor: "blue",
        textAlign: 'left',
        padding: 0,
        borderColor: "beige",
        border: '5px solid'
    },
    messages: {
        backgroundColor: "blue",
        textAlign: 'left',
        padding: 0,
        borderColor: "magenta",
        border: '5px solid'
    },
    protection: {
        backgroundColor: "blue",
        textAlign: 'left',
        padding: 0,
        borderColor: "#953afc",
        border: '5px solid'
    },
    button: {
        backgroundColor: "white",
        borderRadius: "1.5em",
        padding: "2%",
        textTransform: "none",
    }
});

function PlanDetails({details}) {
    const classes = useStyles();
    console.log(details.id)


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {/* ----This is the title for this component---- */}
                <Grid container>
                    <Grid item xs={12} style={{height: "20%"}}>
                        {/*<Paper className={classes.title} elevation={0}>*/}
                        <Typography variant="subtitle1" className={classes.pos}
                                    style={{display: 'inline-block'}}>
                            {details.data}
                        </Typography>
                        <Typography variant="subtitle2" style={{display: 'inline-block'}}>
                            FOR <strike>{details.price}</strike>
                        </Typography>
                        <Typography variant="h6" className={classes.pos} style={{display: 'inline-block'}}>
                            {details.salePrice}
                        </Typography>
                    </Grid>
                    {/*---- This is the 3 colored boxes on the left of component---- */}
                    <Grid xs={6} container item
                          // style={{height: "30%"}}
                          direction="column"
                          justifyContent="center"
                          spacing={1}>
                        <Box p={0.5}>
                            <ListItem className={classes.details}>
                                <ListItemIcon style={{minWidth: '30px'}}>
                                    <FlashOnIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant="body1">
                                        {details.data} of data
                                    </Typography>}>
                                </ListItemText>
                            </ListItem>
                        </Box>
                        <Box p={0.5}>
                            <ListItem className={classes.calls}>
                                <ListItemIcon style={{minWidth: '30px'}}>
                                    <CallIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant="body1">
                                        {details.calls}
                                    </Typography>}>
                                </ListItemText>
                            </ListItem>
                        </Box>
                        <Box p={0.5}>
                            <ListItem className={classes.messages}>
                                <ListItemIcon style={{minWidth: '30px'}}>
                                    <MessageIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant="body1">
                                        {details.messaging}
                                    </Typography>}>
                                </ListItemText>
                            </ListItem>
                        </Box>
                        <Box p={0.5}>
                            <ListItem className={classes.protection}>
                                <ListItemIcon style={{minWidth: '30px'}}>
                                    <DescriptionIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant="body1">
                                        {details.billProtection}
                                    </Typography>}>
                                </ListItemText>
                            </ListItem>
                        </Box>
                    </Grid>
                    <Grid container
                          xs={6}
                          direction="column"
                          justifyContent="flex-end"
                          alignItems="center">
                        <Typography variant="body1">
                            Critical information summary
                        </Typography>
                        {/*</Grid>*/}
                        {/*<Grid item xs>*/}
                        <Button disableElevation variant="contained" className={classes.button}>
                            <Typography variant="subtitle2"
                                        style={{color: "blue"}}>
                                Get a SIM
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        // // this needs to change between the blue and white card
        // <Card className={classes.root}
        //       style={{
        //           backgroundColor: 'blue',
        //       }}
        //       variant="outlined">
        //
        //     <Grid
        //         container
        //     >
        //         <CardContent className={classes.content}>
        //             <Grid item xs>
        //                 {/*<Grow>*/}
        //                 <Typography variant="subtitle1" className={classes.pos} style={{display: 'inline-block'}}>
        //                     {details.data}
        //                 </Typography>
        //                 {/*</Grid>*/}
        //                 {/*<Grid item xs>*/}
        //                 {/*</Grow>*/}
        //                 <Typography variant="subtitle2" style={{display: 'inline-block'}}>
        //                     FOR <strike>{details.price}</strike>
        //                 </Typography>
        //                 {/*</Grid>*/}
        //                 {/*<Grid item xs>*/}
        //                 <Typography variant="h6" className={classes.pos} style={{display: 'inline-block'}}>
        //                     {details.salePrice}
        //                 </Typography>
        //             </Grid>
        //         </CardContent>
        //     </Grid>
        //     <Grid container>
        //         <Card variant="outlined" className={classes.cardData}>
        //             <CardContent>
        //                 <Typography>
        //                     {details.data} of data
        //                 </Typography>
        //             </CardContent>
        //         </Card>
        //     </Grid>
        // </Card>
    );
}

export default PlanDetails;