import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const ShowTrending = (props) => {
    console.log(props) //{products:[smartphones]}
  return (
    <Swiper spaceBetween={0}
      slidesPerView={3}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // 2 seconds
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {
        props.products.map((ele,i)=>{
            return <SwiperSlide className='text-center flex justify-center' >
                <img className='max-h-[200px] m-auto' src={ele.thumbnail} alt="" />
                <p className='font-semibold'>{ele.title}</p>
            </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default ShowTrending
