import React from 'react'

import { Box , TextField , makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container : {
        backgroundColor : '#F6F6F6',
        padding : '10px',
        marginBottom : 12,    
    },
    texetStyle : {
        marginLeft : '15px'
    }
})

const UserInput = ({userInputHandler , userCountHandler}) => {
    const classses = useStyles();
    return (
        <Box className={classses.container}>
        
            <TextField
            className = {classses.texetStyle}
            label="Serch Image"
            onChange={(e)=> userInputHandler(e.target.value)}
            />

            <TextField
            className = {classses.texetStyle}
            label="Number of images"
            onChange={(e)=> userCountHandler(e.target.value)}
            />

        </Box>
    )
}

export default UserInput
