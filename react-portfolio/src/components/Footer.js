import React from 'react'



const Footer = () => {
    return (
        <footer id="footer" style= { { 
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(16, 12, 10)',
            padding: '30px',
            marginBottom: '0px',
            width: '100%',
            zIndex: '2',
        } } >
            <h3 style={ { 
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#660c0c',
            } }>Where imagination becomes <span style={ {
            fontFamily: 'Rage Italic',
            background: '-webkit-linear-gradient(#e39d01, #d83f03, #7d2800, #1a0101, #090101)',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
            fontSize: '72px',
            marginLeft: '30px',
        } }>reality</span></h3>
            <p style={ {
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '16px',
                    color: '#610b0b',
            } }> { '\u00A9' } Heather Bjoin</p>
        </footer>
    )
}

export default Footer




