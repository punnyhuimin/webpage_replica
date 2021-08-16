import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlanButtonContainer from "./Component/planButtonContainer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import CustomAlert from "./Component/customAlert"
import theme from "./theme";
import PlanDetailsContainer from "./Component/planDetailsContainer";

const useStyles = makeStyles({
    root: {
        flexGrow: 2,
        padding: theme.spacing(20),
    },
    image: {
        backgroundImage: 'url(/backgroundGradient.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    },
    content: {
        flexGrow: 2,
        padding: theme.spacing(20),
    },
});

function App() {
    const [details, setDetails] = useState(SAMPLE_DETAILS);
    // const [selectedPlans, setSelectedPlans] = useState([]);
    const [selectedPlan1, setSelectedPlans1] = useState([]);
    const [selectedPlan2, setSelectedPlans2] = useState([]);
    const [openError, setOpenError] = useState(false);
    const classes = useStyles()
    //
    // const [activeComponent1, setActive1] = useState('BASE')
    // const [activeComponent2, setActive2] = useState('BASE')

    // console.log("selected plan: " + selectedPlans)
    console.log("selected plan1:" + selectedPlan1)
    console.log("selected plan2:" + selectedPlan2)

    const singlePlan = details.filter((detail) => detail.type == ('single'));
    const familyPlan = details.filter((detail) => detail.type == ('family'));

    // Data collected from the button
    function handlePlan(selectedDetail) {
        // console.log(selectedDetail)
        // 1) if selectedDetail is the same as selectedPlans1 set plan1 as empty
        console.log("detail id: " + (selectedDetail.id))
        console.log("detail id1: " + (selectedPlan1.id))
        if (selectedDetail.id == selectedPlan1.id) {
            console.log("1")
            setSelectedPlans1([])
            // setSelectedPlans(selectedPlans.filter(plan => plan.id == selectedDetail.id))
        }
        // 2) if selectedDetail is the same as either selectedPlans2, set plan2 as empty
        else if (selectedDetail.id == selectedPlan2.id) {
            console.log("2")
            setSelectedPlans2([])
            // setSelectedPlans(selectedPlans.filter(plan => plan.id == selectedDetail.id))
        }
        // 3) if both filled, then alert error
        else if (selectedPlan1.length !== 0 && selectedPlan2.length !== 0) {
            console.log("3")
            setOpenError(true);
        }
        //4) if both empty, add to selectedPlans1
        else if (selectedPlan1.length === 0 && selectedPlan2.length === 0) {
            console.log("4")
            const planList = []
            planList.push(selectedDetail)
            setSelectedPlans1(selectedDetail)
            // setSelectedPlans(planList)
        }
        // 5) if selectedPlans1 is filled, put the selected plan in plan 2
        else if (selectedPlan1.length !== 0) {
            console.log("5")
            setSelectedPlans2(selectedDetail)
        }
        // 6) if selectedPlans2 is filled, put the selected plan in plan 1
        else if (selectedPlan2.length !==0) {
            console.log("6")
            setSelectedPlans1(selectedDetail)
        }
        // setOpenError(false);
    }

    function closeError() {
        setOpenError(false);
    }


    return (
        <div
            style={{
                backgroundImage: 'url(/background.png)',
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw",
            }}>
            <Grid container spacing={3} className={classes.content}>
                {/*This is the first column*/}
                <Grid container xs={6} spacing={3}>
                    <Grid item>
                        <Typography variant="h1">No lock-ins. <br/> Stacks of data. </Typography>
                        <Typography variant="body2">
                            Our customers voted it the "Smartest Plan" for a reason. <br/>
                            We've got your back with no lock-in contracts, 3G Data Shock Protection,
                            customisable plans and the choice of up to 100GB of data.
                            Because you'll need it, when you're only four episodes away from the season finale.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm container spacing={4} direction='column'>
                        <Grid item>
                            <CustomAlert open={openError} funcHandleAlert={errorState => closeError(errorState)}/>
                            <Typography variant="h5">Single Plans</Typography>
                            <PlanButtonContainer details={singlePlan}
                                                 funcPlan={selectedPlan => handlePlan(selectedPlan)}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Family Plans</Typography>
                            <PlanButtonContainer details={familyPlan}
                                                 funcPlan={selectedPlan => handlePlan(selectedPlan)}/>
                        </Grid>
                    </Grid>
                </Grid>
                {/*this is the second column*/}
                {/*<Grid item xs={6} container>*/}
                {/*    <Grid item xs={6} container direction="column" spacing={5}>*/}
                {/*        <Grid item>*/}
                {/*            <PlanDetailsContainer details={selectedPlan1}/>*/}
                {/*        </Grid>*/}
                {/*        <Grid item>*/}
                {/*            <PlanDetailsContainer details={selectedPlan2}/>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
                <Grid container xs={6} spacing={3}>
                    <Grid item>
                        <PlanDetailsContainer details={selectedPlan1}/>
                    </Grid>
                    <Grid item>
                        <PlanDetailsContainer details={selectedPlan2}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

const SAMPLE_DETAILS = [
    {
        id: 1,
        type: 'single',
        data: '100GB',
        calls: 'Unlimited Standard National Calls',
        messaging: 'Unlimited Standard National Messages',
        billProtection: '3GB Bill Shock Protection',
        price: '$38',
        salePrice: '$30',
        billInfo: <link></link>
    },
    {
        id: 2,
        type: 'single',
        data: '20GB',
        calls: 'Unlimited Standard National Calls',
        messaging: 'Unlimited Standard National Messages',
        billProtection: '3GB Bill Shock Protection',
        price: '$38',
        salePrice: '$28',
        billInfo: <link></link>
    },
    {
        id: 3,
        type: 'single',
        data: '8GB',
        calls: 'Unlimited Standard National Calls',
        messaging: 'Unlimited Standard National Messages',
        billProtection: '3GB Bill Shock Protection',
        price: '$18',
        salePrice: '$14',
        billInfo: <link></link>
    },
    {
        id: 4,
        type: 'family',
        data: '80GB',
        calls: 'Unlimited Standard National Calls',
        messaging: 'Unlimited Standard National Messages',
        billProtection: '3GB Bill Shock Protection',
        price: '$38',
        salePrice: '$30',
        billInfo: <link></link>
    },
    {
        id: 5,
        type: 'family',
        data: '17GB',
        calls: 'Unlimited Standard National Calls',
        messaging: 'Unlimited Standard National Messages',
        billProtection: '3GB Bill Shock Protection',
        price: '$38',
        salePrice: '$30',
        billInfo: <link></link>
    }
]

export default App;
