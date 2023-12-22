import React from 'react'

const ButtonContainer = ({ children }) => {
    return (
        <div
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "1rem", marginTop: '1rem' }}
        >{children}</div>
    )
}

export default ButtonContainer