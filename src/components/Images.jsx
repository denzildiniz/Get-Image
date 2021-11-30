import React from 'react'
// import { Box } from '@material-ui/core'

import Image from './Image'

const Images = ({data}) => {
    return (
        <div>
            { data && data.map(img =>(
                <Image img={img} />
            ))}
        </div>
    )
}

export default Images
