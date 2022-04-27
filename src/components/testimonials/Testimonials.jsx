import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Scott Swanson, Product Manager, LanguageLine Solutions',
    review: `Always available, extremely knowledgeable, and a tremendous "can-do" attitude.
     Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, 
     and Esmerald was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations... the entire company was thrilled with it! Without any hesitation... highly recommended.`,
  },
  {
    avatar: AVTR2,
    name: 'Moe Ammar, President, Pacific Grove Chamber of Commerce',
    review: `The Pacific Grove Chamber of Commerce would like to thank Esmerald Seiitli for all the efforts and suggestions that assisted us in better positioning ourselves in the area of web,
    technology and training.`,
  },
  {
    avatar: AVTR3,
    name: 'Hunter Lowder, Director of Hospitality, Holman Ranch',
    review: `Always available to answer any questions. Very knowledgeable about the services they provide. 
    Would recommend to anyone!`,
  },
  {
    avatar: AVTR4,
    name: 'Hunter Lowder, Director of Hospitality, Holman Ranch',
    review: `Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised.
     We feel privileged to have Esmerald and his team as our online Web development partners!`,
  },
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
