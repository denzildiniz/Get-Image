import React from 'react'

import { Box , TextField , makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container : {
        backgroundColor : '#F6F6F6',
        padding : '10px'
        
    },
    texetStyle : {
        marginLeft : '15px'
    }
})

const UserInput = () => {
    const classses = useStyles();
    return (
        <Box className={classses.container}>
            <TextField
            className = {classses.texetStyle}
            label="Serch Image"
            />

            <TextField
            className = {classses.texetStyle}
            label="Number of images"
            />
        </Box>
    )
}

export default UserInput
