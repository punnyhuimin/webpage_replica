import {Alert} from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import React from "react";

function customAlert({open, funcHandleAlert}) {
    return (
        <Collapse in={open}>
            {/* TODO: Move this alert to App.js level*/}
            <Alert severity="info"
                   action={
                       <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={(e) => {
                               funcHandleAlert(e);
                           }}
                       >
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }
            >
                Please unselect one option first
            </Alert>
        </Collapse>
    )
}

export default customAlert;