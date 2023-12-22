import React from 'react'

const GridTextContainer = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                flex: 3,
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center'

            }}
        >{children}</div>
    )
}

export default GridTextContainer