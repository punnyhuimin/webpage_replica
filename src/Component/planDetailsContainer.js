import React, {useState} from 'react';
import PlanDetails from "./planDetails";
import SwitchComponents from "./SwitchComponents";
import PlanDetailsBase from "./planDetailsBase";

function PlanDetailsContainer({details}) {
    // function handleDetailSelect(selectedPlan) {
    //     funcPlan(selectedPlan);
    // }
    const [active, setActive] = useState("BASE")
    // function handleClick(){
    //     const active = activeComponent
    //     const newActive = active === "BASE" ? "DETAILS": "BASE";
    //     setActive(newActive);
    // }
    if (details.length !== 0) {
        return <PlanDetails
            details={details}
            // onClick={selectedPlan => handleDetailSelect(selectedPlan)}
        />
    } else {
        return <PlanDetailsBase/>
    }
    // return (
    //         <div className="card-grid">
    //             {/*{active === "BASE"?(*/}
    //             {/*    <PlanDetailsBase name = "BASE"/>*/}
    //             {/*):*/}
    //             {/*    active === "DETAILS" ? (*/}
    //             {/*    <PlanDetails*/}
    //             {/*        detail={details}*/}
    //             {/*    name = "DETAILS"*/}
    //             {/*    // onClick={selectedPlan => handleDetailSelect(selectedPlan)}*/}
    //             {/*/> ) :*/}
    //             {/*    null*/}
    //             {/*}*/}
    //
    //             {
    //                 if(details.length !==0){
    //                     return <PlanDetails
    //                     detail={details}
    //                 // onClick={selectedPlan => handleDetailSelect(selectedPlan)}
    //             />
    //             } else {
    //                     return  <PlanDetailsBase/>
    //             }
    //             }
    //         </div>
    // );
}

export default PlanDetailsContainer;