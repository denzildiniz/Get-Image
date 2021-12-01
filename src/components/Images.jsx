import React from 'react'

import { Box, Grid, makeStyles } from '@material-ui/core'

import Image from './Image'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: 10,
        paddingLeft : 24,
        paddingRight : 24,
    },
})

const Images = ({ data }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                {
                    data && data.map(img => (
                        <Grid item xs={12} sm={6} md={4} key={img.id} >
                            <Image key={img.id} img={img} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Images
