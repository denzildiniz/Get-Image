
import React from 'react'

import { AppBar, Toolbar , Typography , makeStyles} from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles({
    appBarColor : {
        backgroundColor : '#718093',
    },

})

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBarColor}>
            <Toolbar>
                <PhotoCameraIcon/>
                <Typography variant="h5" style={{marginLeft:10}}>
                    Finder
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
