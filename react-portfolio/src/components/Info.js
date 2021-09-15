import React from 'react'
import furrydress from './images/furrydress.jpg'
import '../styles/AboutMe.css';


const Info = () => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-9">
                <h3 className="info">About Me </h3>
            </div>

            <div className="col-4">
                <img src={furrydress} alt="Heather in black dress" className="infoImg" height="300px"></img>

            </div>
            <div className="col-6">
                <p>What is there to say? Perhaps, I could say who I am, what I do and my reason for being here. For doing this thing. If you are curious, let me tell you a  story. One that began many, many years ago.</p>
                <br></br>                
                <p>Back when I was 14 years old, I pulled my Papa's C++ book off the bookshelf and opened it to the first chapter, the simple "Hello World". I struggled, of course, I did. My attention span was a max of -1 and so was my self confidence. I struggled with what every coder and programmer in the world has strugled with, our archnemesis; the semicolon. If I would have known then that I was not the only human in the world who faught for dhours over one small semicolon my life would have been different. I wouldn't have waited so long to begin my journey.</p>
                <br></br>
                <p>
                    After years of talking to many people who have spent time in the coding world, I learned that they all had struggles. So I figured I would give this coding thing one more shot. Little did I know, I would fall in-love with a world I once believed I wasn't cut out to be apart of. 
                </p>
                <br></br>
                <p>
                    So, here I am, making amends and proving my year old self wrong. Currently, I am enrolled at the University of Minnesota making my way through the Full Stack Web Development Bootcamp.
                </p>
                <br></br>
                <p> 
                    Each step may be small, but it is taking me down a path to a career that I will enjoy. I was told to always remember that enjoyment, and I made a promise that I will. And I don't break promises. 
                </p>
            </div>
            <hr></hr>
        </div>
    </div>
    )
}

export default Info