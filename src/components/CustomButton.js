import React from 'react'

const CustomButton = ({ text }) => {
    return (
        <button style={{
            padding: '1rem 1.8rem',
            backgroundColor: 'white',
            color: 'black',
            fontSize: '1rem',
            border: "none",
            borderRadius: '2rem'
        }}>
            {text || "Button"}
        </button>
    )
}

export default CustomButton