import React from 'react'
import cairnStones from './cairnstonesbsb2.jpg'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div>
            <Navbar />
        <header style= {{
            backgroundColor: 'black',
        }}>
            <div style={ { 
                backgroundColor: 'black',
            } }>
            <div style={ { 
                backgroundImage: `url(${cairnStones})`,
                backgroundSize: 'cover',
                height: '300px', 
                width: '100%',
                backgroundColor: 'rgb(16, 12, 10)',   
                backgroundPosition: "12% 38%",          
                }}>
            </div>


            </div>


        </header>
        </div>
    )
}

export default Header