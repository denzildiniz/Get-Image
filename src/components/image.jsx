import React from 'react'

import { Card, CardMedia, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    media: {
        width: '100%',
        height: 250,
        objectFit: 'cover'
    }
})

const Image = ({ img }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia
                component="img"
                className={classes.media}
                image={img.largeImageURL}
                alt={img.type}
            />
        </Card>
    )
}

export default Image
