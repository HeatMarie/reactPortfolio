import React, { useState } from 'react'
import cairnStones from './images/cairnstonesbsb2.jpg'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import projects from './projects'
import Info from './Info'
import Contact from './Contact'

const Header = () => {
    const [currentPage, setCurrentPage] = useState('Info')
    const _pageRender = () => {
        // if (currentPage === 'Portfolio') {
        //     return <Portfolio projects={projects}/>
        // } else if ( currentPage === 'Contact') {
        //     return <Contact /> 
        // }
        // else {
        //     return <Info />
        // }

        switch(currentPage) {
            case 'Portfolio':
                return <Portfolio projects={projects} />;
            case 'Contact':
                return <Contact />;
            default:
                return <Info />;
        }
    }
const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <header style= {{
            backgroundColor: 'black',
        }}>Oh
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
        {_pageRender()}
        </div>
    )
}

export default Header