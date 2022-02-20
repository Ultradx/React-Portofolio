import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Aldo Seitlli',
    review: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
    quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione!`
  },
  {
    avatar: AVTR2,
    name: 'Edri Seitlli',
    review: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
    quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione!`
  },
  {
    avatar: AVTR3,
    name: 'Stathis Seitlli',
    review: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
    quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione!`
  },
  {
    avatar: AVTR4,
    name: 'Kwstas Seitlli',
    review: `Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
    quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione!`
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"    
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
      
    </section>
  )
}

export default Testimonials