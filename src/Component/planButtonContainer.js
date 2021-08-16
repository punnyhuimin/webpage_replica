import React, {useState} from 'react';
import PlanButton from "./planButton";


function PlanButtonContainer({details, funcPlan}) {
    function handleDetailSelect(selectedPlan) {
        funcPlan(selectedPlan);
    }

    return (
        <div className="card-grid">
            {details.map(detail => {
                return <PlanButton
                    detail={detail}
                    onClick={selectedPlan => handleDetailSelect(selectedPlan)}/>
            })}
        </div>
    );
}

export default PlanButtonContainer;