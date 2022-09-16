import Image from 'next/image'
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from '@heroicons/react/solid'
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";













const userfeedbackSlider = [
  [
    {
      id: 1,
      content: 'Travel blogger. Great job on the look and feel of the plugin. It’s a great free solution for small website owners like ourselves.',
      author: 'Coen',
      newsletter: '+ See newsletter example',
      thumbnailImage: 'http://loremflickr.com/640/480/fashion'
    },
    {
      id: 2,
      content: 'MailPoet simply saves me a lot of time. It’s easy to import my latest blog posts into my newsletter.',
      author: 'Lisa',
      newsletter: '+ See newsletter example',
      thumbnailImage: 'http://loremflickr.com/640/480/transport',
    },
  ],
  [
    {
      id: 1,
      content: 'MailPoet makes managing a subscriber list and designing eye-catching emails so easy.',
      author: 'Katrin',
      newsletter: '+ See newsletter example',
      thumbnailImage: 'http://loremflickr.com/640/480/city',
    },
    {
        id: 2,
        content: 'Easy to implement and use, MailPoet has got everything you need in a newsletter plugin – nice design, all the technical features.',
        author: 'Francis',
        newsletter: '+ See newsletter example',
        thumbnailImage: 'http://loremflickr.com/640/480/sports',
    },
  ],
  [
    {
      id: 1,
      content: 'I’ve been using MailPoet for sending out my weekly newsletter since 2016. Their system is easy to use, the customising tools are unreal, and  it makes all so much easier.',
      author: 'Jez Ryan',
      newsletter: '+ See newsletter example',
      thumbnailImage: 'http://loremflickr.com/640/480/animals',
    },
    {
        id: 2,
        content: 'Travel blogger. Great job on the look and feel of the plugin. It’s a great free solution for small website owners like ourselves.',
        author: 'Coen',
        newsletter: '+ See newsletter example',
        thumbnailImage: 'http://loremflickr.com/640/480/abstract',
    },
  ]
]


export default function userfeedback({ data }) {

  function leftArrow() {
    alert("hi")
  }


  return (
    <>
      {/* <div className='bg-gradient-to-r from-pink-600 via-orange to-pink-600'> */}


      {/* <div className="text-center">
      <h3 className="font-bold text-2xl text-blue-900">For 300,000 users around the world,</h3>
      <h3 className="font-bold text-2xl text-blue-900"> MailPoet makes email happen.</h3>
      </div>

      <div className='flex'>
      <div>
      <div className=" ml-165 mt-100 border rounded-md shadow-2xl shadow-pink-300 w-490 h-310 bg-white">
      </div>
      <div className="ml-210 -mt-260">
      <Image className="rounded-full" src="/Katrin.webp" width="100" height="100"/>
      </div>
      <div className="">
        <h4 className="ml-357 -mt-114 font-bold text-xl text-blue-900">Coen</h4>
        <p className='ml-357 mt-40 w-288 text-blue-900 font-bold'>Travel blogger. Great job on the look and feel of the plugin. It’s a great free solution for small website owners like ourselves.</p>
        <p className="ml-357 mt-40 text-orange font-bold">+ See newsletter example</p>
      </div>
      <ArrowCircleLeftIcon onClick={()=>{leftArrow()}} className=" ml-165 mt-65 w-12 h-12" />

      </div>
      


      <div>
      <div className=" ml-100 mt-100 border rounded-md shadow-2xl shadow-pink-300 w-490 h-310 bg-white">
      </div>
      <div className="ml-145 -mt-260">
      <Image className="rounded-full" src="/francis.webp" width="100" height="100"/>
      </div>
      <div className="">
        <h4 className="ml-292 -mt-114 font-bold text-xl text-blue-900">Coen</h4>
        <p className='ml-292 mt-40 w-288 text-blue-900 font-bold'>Travel blogger. Great job on the look and feel of the plugin. It’s a great free solution for small website owners like ourselves.</p>
        <p className="ml-292 mt-40 text-orange font-bold">+ See newsletter example</p>
      </div>
      <ArrowCircleRightIcon  className="w-12 h-12 mt-65 ml-543 " />
      </div>
      </div> */}



      {/* <div className=" ml-665 flex">
      <label className=" ">
                <input type="radio" className="form-radio h-5 w-5 text-zinc-400 hover:bg-orange" />
                
      </label>
      <label className="  ">
                <input type="radio" className="form-radio h-5 w-5 text-zinc-400 hover:bg-orange" />
                
      </label>
      <label className="  ">
                <input type="radio" className="form-radio h-5 w-5 text-zinc-400 hover:bg-orange" />
                
      </label>
      <label className="  ">
                <input type="radio" className="form-radio h-5 w-5 text-zinc-400 hover:bg-orange" />
                
      </label>
      </div> */}

      <div>
        <div className="text-center">
          <h3 className="font-bold text-2xl text-blue-900">For 300,000 users around the world,</h3>
          <h3 className="font-bold text-2xl text-blue-900"> MailPoet makes email happen.</h3>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          dynamicBullets=  {true}
          modules={[Autoplay, Navigation, Pagination]}     
        >
          {
            userfeedbackSlider.map((e, index) => (

              <SwiperSlide key={index}>
                <div className="flex -ml-12 bg-gradient-to-r from-pink-600 via-orange to-pink-600 h-screen">
                  {
                    e.map((a) => {
                      return <div key={'value' + a.id}>



                       

       

                           <div>
                           <div>
                           <div className=" ml-165 mt-100 border rounded-md shadow-2xl shadow-pink-300 w-490 h-320 bg-white">
                           </div>
                            <div className="ml-210 -mt-260">
                              <Image className="rounded-full" src={a.thumbnailImage} width="100" height="100" />
                            </div>
                            <div className="">
                              <h4 className="ml-357 -mt-114 font-bold text-xl text-blue-900">{a.author}</h4>
                              <p className='ml-357 mt-40 w-288 text-blue-900 font-bold'>{a.content}</p>
                              <p className="ml-357 mt-40 text-orange font-bold">{a.newsletter}</p>
                            </div>
                          </div>
                        </div>


                        {/* <p>{a.author}</p>
                        <p>{a.content}</p>
                        <p>{a.newsletter}</p> */}
                      </div>
                    })
                  }
                </div>
              </SwiperSlide>


            ))
          }
        </Swiper>
      </div>








      {/* </div> */}
    </>


  )
}

// userfeedback.getInitialProps = async () => {
//   const response = await fetch('https://631ee17958a1c0fe9f5a35c0.mockapi.io/slider-content')
//   const data = await response.json()
//   return {
//     data: data
//   }
// }