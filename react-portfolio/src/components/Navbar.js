import React from 'react'


const Navbar = (props) => {

    const { currentPage, handlePageChange} = props;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="heatmarie.com" style={ {
                        color: 'white',
                        fontSize: '2em',
                        fontFamily: 'Rage Italic',
                        background: '-webkit-linear-gradient(#eee, #333)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                        textAlign: 'center',
                        backgroundColor: 'black',
                        }} >
                            Heather Bjoin
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="#info" onClick={() => handlePageChange('Info')} >About Me</a>
                            </li>

                            <li className="nav-item">
                                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link' : 'nav-link'}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className={currentPage === 'Contact' ? 'nav-link' : 'nav-link'} aria-current="page" href="#contact" onClick={() => handlePageChange('Contact')} >Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Links
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="https://github.com/HeatMarie" target="_blank">Github</a></li>
                                    <li><a className="dropdown-item" href="#">Portfolio</a></li>
                                    <li><a className="dropdown-item" href="pdf/hbjoin_resume2021.pdf" target="_blank">Resume</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar