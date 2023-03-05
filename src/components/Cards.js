import React from 'react'
import  './CardStyle.css'
import abc from '../images/img1.jpg'
import df from '../images/img2.jpg'
import gh from '../images/img3.jpg'
import kl from '../images/img4.jpg'



export default function Cards() {
    return (
        <>
        
          
        <center className='my-5'><h1>Testimonials</h1></center> 
        
            <div className="container my-4">
                
                <section className="container">
      <div className="card">
        <div className="image">
          <img src={abc} alt="Image" />
        </div>
        <h2>Biswajit</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn btn-outline-info">View More</button>
      </div>
      <div className="card">
        <div className="image">
          <img src={df} alt="Image" />
        </div>
        <h2>Umashankar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn btn-outline-info">View More</button>
      </div>
      <div className="card">
        <div className="image">
          <img src={gh} alt="Image" />
        </div>
        <h2>Ayesh</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn btn-outline-info">View More</button>
      </div>
      <div className="card">
        <div className="image">
          <img src={kl} alt="Image" />
        </div>
        <h2>Satya</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn btn-outline-info">View More</button>
      </div>
    </section>
            </div>
        </>
    )
}
