import React from 'react'

import '../styles/Portfolio.css';

const Portfolio = (props) => {

    const { projects } = props;
    console.log('projects', projects)


    const _renderProject = (item, index) => {
        console.log('ITEM', item)
        
        return (
        <div key={index} className="accordion-item">
            <h2 className="accordion-header" id="headingOne" style={{
                color: 'white',
                backgroundColor: 'orange',
            }}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={item.dataBsTarget} aria-expanded="true" aria-controls={item.ariaControls} style={{
                backgroundColor: '#212529',
                color: 'orange',
                alignContent: 'center'
                
            }}>
                <h3>{item.title}</h3>

            </button>
            </h2>
            <div  id={item.ariaControls} className="accordion-collapse collapse show" aria-labelledby="headingOne" style={{
                width: '80%',
            }}>
                <div className="accordion-body">
                <img src={item.img} alt="something here which will be an itemalt" style={{
                    width: '70%',
                    height: 'auto',
                }}></img>
                <br></br>
                <p>{item.description}</p>
                </div>
            </div>
        </div>
    )};
    
    return (

        <div  style={{
            width: '80%',
            justifyContent: 'center'
        }}>
            <h2 id="portfolio" className="portfolio">Portfolio</h2>
                <div  className="" id="" style={{
                    backgroundColor: 'orange',
                    marginLeft: '20%',
                }}>
                { projects.map(_renderProject) }
                </div> 
        </div>
    )
}

export default Portfolio