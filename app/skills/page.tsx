import React from 'react'
import Navbar from '@/components/Navbar'

const skills = () => {
  return (
    <>
    <Navbar/>
    <div id='skills' className=' container pt-32 w-[1170px] mx-auto text-white'>
      <div className='grid md:grid-cols-2 gap-20 items-centre'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-yellow-100 pt-2'>
            "I have experience with a variety of technologies and frameworks including React, Node.js, Next.js and Tailwind CSS, specializing in HTML, CSS and Typescript. With a passion of learning, I stay updated on latest technologies to enhance my skills and contribute effectively to projects." 
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-purple-400 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Typescript </h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              </div>
          </div>
          
        </div>
      </div>
      <div data-aos="zoom-in-up"
      className='pt-20 grid gap-10 xl:gap-y-10 lg:grid-cols-3 place-items-center '>
            
            <img src="/Next-js.jpg"/>
            <img src="/React-Js.jpg"/>
            <img src="/Tailwind-CSS.png"/>
          

        </div>
    </div>
    </>
  )
}

export default skills
