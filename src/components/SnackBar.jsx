import React from 'react'

import {Snackbar} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const SnackBar = ({open , toggleSnack}) => {
    const handleClose = () =>{
        toggleSnack(false)
    }

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <MuiAlert severity="info" onClose={handleClose}>
                Number of images must be between 3 - 200
            </MuiAlert> 
        </Snackbar>
    )
}

export default SnackBar
