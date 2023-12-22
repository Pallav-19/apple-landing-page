import React from 'react'

const GridImageContainer = ({ src }) => {
    return (
        <div
            style={{
                flex: 3,
                width: '60%'
            }}
        >

            <img
                src={src}
                alt='ima'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            >

            </img>
        </div>
    )
}

export default GridImageContainer