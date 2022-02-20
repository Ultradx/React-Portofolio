import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portofolio1.jpg'
import IMG2 from '../../assets/portofolio2.jpg'
import IMG3 from '../../assets/portofolio3.jpg'
import IMG4 from '../../assets/portofolio4.jpg'
import IMG5 from '../../assets/portofolio5.jpg'
import IMG6 from '../../assets/portofolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Crypto Currency & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image: IMG2,
    title: 'Crypto Currency & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:3,
    image: IMG3,
    title: 'Crypto Currency & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:4,
    image: IMG4,
    title: 'Crypto Currency & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:5,
    image: IMG5,
    title: 'Crypto Currency & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:6,
    image: IMG6,
    title: 'Crypto Currency & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  }
]

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portofolio__item'>
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
