import React, { useRef,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import {FaStar} from "react-icons/fa6"
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg"

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Review = () => {
   
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
            clickable:true,
        }}
        breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>I absolutely love this bookstore! The atmosphere is cozy and inviting, making it the perfect place to spend a quiet afternoon browsing through books. The selection is fantastic, with a wide range of genres and titles to choose from. The staff is always friendly and helpful, ready to offer recommendations or help you find exactly what you're looking for. I've discovered so many great reads here and can't wait to come back for more!</p>
                <Avatar
                 alt="avatar of Jese" 
                 img={proPic}
                 rounded
                 className='w-10 mb-4'
                  />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO,ABC Company</p>

            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>A great bookstore with a diverse selection of books.
                 I appreciate the variety of genres available, from fiction to non-fiction, 
                 and the well-organized layout makes it easy to find what you're looking for. 
                 The staff is knowledgeable and friendly, although sometimes it can get a bit crowded during peak hours. 
                 Overall, a wonderful place to explore new titles and authors.</p>
              
                <Avatar
                 alt="avatar of Jese" 
                 img={proPic}
                 rounded
                 className='w-10 mb-4'
                  />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO,ABC Company</p>

            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>Decent bookstore with a good selection of mainstream titles. 
                While I appreciate the convenience and accessibility of the store, 
                I wish they had more niche and independent titles available. The staff is helpful but can be a bit overwhelmed during busy times,
                 resulting in longer wait times at the checkout. It's a decent option if you're looking for popular reads,
                  but not necessarily the best place for unique finds.</p>
              
                <Avatar
                 alt="avatar of Jese" 
                 img={proPic}
                 rounded
                 className='w-10 mb-4'
                  />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO,ABC Company</p>

            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
      </div>
    </div>
  )
}
 
export default Review;