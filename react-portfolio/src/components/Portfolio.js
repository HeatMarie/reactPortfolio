import React from 'react'
import furrydress from './furrydress.jpg'
import '../styles/Portfolio.css';

const Portfolio = (props) => {
    return (

        <div>
        <h2 id="portfolio" className="portfolio">Portfolio</h2>


                <div class="" id="" style={{
                    backgroundColor: 'orange',
                }}>
                            {props.projects.map((item) => {
            return (
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne" style={{
                        color: 'white',
                        backgroundColor: 'orange',
                    }}>
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{
                        backgroundColor: 'black',
                        color: 'orange',
                        alignContent: 'center'
                        
                    }}>
                        <h3>{item.title}</h3>

                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <img src={item.img}></img>
                        <br></br>
                        <p>{item.description}</p>
                        </div>
                    </div>
                </div>

        )
        })}
                </div> 
        </div>
    )
}

export default Portfolio