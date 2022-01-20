import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = (props) => {

    const { projects } = props;
    console.log('projects', projects)


    const _renderProject = (item, index) => {
        console.log('ITEM', item)
        
        return (
        <div key={index} className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={item.dataBsTarget} aria-expanded="true" aria-controls={item.ariaControls}>
                <h3>{item.title}</h3>

            </button>
            </h2>
            <div  id={item.ariaControls} className="accordion-collapse collapse show project-accordion" aria-labelledby="headingOne">
                <div className="accordion-body">
                    <div className='img-and-text'>
                    <img src={item.img} alt="something here which will be an itemalt"></img>
                    <br></br>
                    <p>{item.description}</p>
                    </div>
                    <div className="portfolioLinks">
                    <a href={item.deployed} target="_blank">Live URL</a>
                    <br></br>
                    <a href={item.repo} target="_blank">Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )};
    
    return (

        <section className='portfolio-section'>
            <h2 id="portfolio" className="portfolio">Portfolio</h2>
                <div  className="portfolio-projects" id="">
                { projects.map(_renderProject) }
                </div> 
        </section>
    )
}

export default Portfolio