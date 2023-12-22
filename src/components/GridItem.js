import React from 'react'
import "../App.css"
import GridTextContainer from './GridTextContainer'
import GridImageContainer from './GridImageContainer'
const GridItem = ({ heading, description, imgSrc }) => {
    return (
        <div className='grid-item'>
            <GridTextContainer>
                <p
                    style={{
                        fontSize: '3rem',
                        fontWeight: 500,
                        textAlign: 'center'
                    }}
                >
                    {heading}
                </p>
                <p
                    style={{ whiteSpace: 'pre-line', fontSize: '1.5rem', textAlign: 'center' }}
                >
                    {description}
                </p>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}
                >
                    <a
                        className='styled-links'
                        href='/'>
                        Buy Now 
                    </a>
                    <a
                        className='styled-links'
                        href='/'>
                        Learn more
                    </a>
                </div>
            </GridTextContainer>
            <GridImageContainer src={imgSrc} />
        </div>
    )
}

export default GridItem