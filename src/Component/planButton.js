import React, {useState} from 'react';
import {lighten, makeStyles} from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
    root: {
        minWidth: "8em",
        minHeight: "8em",
        borderRadius: "1em",
        transition: "transform 0.15s ease-in-out",
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    },
});

function PlanButton({detail, onClick}) {
    const [selectedDetail, setSelectedDetail] = useState(false)
    const classes = useStyles();
    const [dataColor, setDataColor] = useState("#989898")
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })

    function handleClick(e) {
        if (selectedDetail) {
            setSelectedDetail(false)
            setDataColor("#989898")
            onClick(detail)
        } else {
            setSelectedDetail(true)
            setDataColor("#e620b4")
            onClick(detail)
        }
    }

    return (
        <Button disableElevation disableRipple onClick={(e) => handleClick(e)}>
            <Card className={classes.root}
                  style={{
                      backgroundColor: selectedDetail ? 'blue' : 'white',
                      color: selectedDetail ? 'white' : '#989898',
                      text: {primary: selectedDetail ? 'white' : '#989898'}
                  }}
                  classes={{root: state.raised ? classes.cardHovered : ""}}
                  onMouseOver={() => setState({raised: true, shadow: 3})}
                  onMouseOut={() => setState({raised: false, shadow: 1})}
                  raised={state.raised} zdepth={state.shadow}>
                <CardActions>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs>
                            <Typography variant="h2" style={{color: dataColor}}>
                                {detail.data}
                            </Typography>
                            <Typography variant="h3">
                                FOR <strike>{detail.price}</strike>
                            </Typography>
                            <Typography variant="h2">
                                {detail.salePrice}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Button>
    );
}

export default PlanButton;
