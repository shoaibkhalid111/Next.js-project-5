import React from 'react'
import Navbar from '@/components/Navbar'


const about = () => {
    return (
        <>
        
            <Navbar />
            <div id='about' className='container pt-32 w-[1170px] mx-auto text-white'>
                <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up ">
                    About Me
                </h2>
                <p className='text-yellow-100 pt-4' data-aos="zoom-in-up">
                    I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 and Metaverse. I am also a student at ICMA, learning Cost and Management Accountancy. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
                </p>
                <div className='pt-24  grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
                
                <img data-aos="zoom-in-up" src="/IT Class.png" width={500} height={300}/>
                <img data-aos="zoom-in-up" src="/ICMA-pic.png" width={350} height={300}/>

                </div>

            </div>
        </>
    )
}

export default about
