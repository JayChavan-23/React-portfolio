import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Full Stack E-Commerce Website with Admin Panel',
    github:'http://github.com'
  },
  {
    id:2,
    image:IMG2,
    title:'Portfolio Website using React.js [Live]',
    github:'http://github.com'
  },
  {
    id:3,
    image:IMG3,
    title:'Full Stack Electric-Bikes Website with Admin Panel',
    github:'http://github.com'
  },
  {
    id:4,
    image:IMG4,
    title:'Portfolio Website using Html-Css-Js',
    github:'http://github.com'
  },
  {
    id:5,
    image:IMG5,
    title:'Library Management System Desktop Application',
    github:'http://github.com'
  },
  {
    id:6,
    image:IMG6,
    title:'Tomato leaf disease classifier ML-Android',
    github:'http://github.com'
  }
]

const Portfolio = () => {
  return (
    <section className='above' id='portfolio'>
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github})=>{
            return (        <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Read more..</a>
            </div>
          
          </article>)
          }) 
        }

      </div>

    </section>
  )
}

export default Portfolio