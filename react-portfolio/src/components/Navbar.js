import React from 'react'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
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
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Links
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="https://github.com/HeatMarie" target="_blank">Github</a></li>
                                    <li><a class="dropdown-item" href="#">Portfolio</a></li>
                                    <li><a class="dropdown-item" href="pdf/hbjoin_resume2021.pdf" target="_blank">Resume</a></li>
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