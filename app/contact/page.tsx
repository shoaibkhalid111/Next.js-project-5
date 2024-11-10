import React from 'react'; 
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Navbar from '@/components/Navbar';


const contact = () => {
    return (
        <>
            <Navbar />
            <div id='contact' className='pt-32 container text-white'>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div className='space-y-8'>
                        <h2 className='text-5xl' data-aos="zoom-in-up">
                            Contact Me
                        </h2>
                        <p className='text-yellow-100 text-[18px] pt-2' data-aos="zoom-in-up">
                            We are always here to help you. Please feel free to contact us by submitting the form.
                        </p>
                        <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                            <AiFillMail size={30} /> xyz@gmail.com
                        </div>
                        <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                            <BsFillTelephoneFill size={30} />(021) 000-0000
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                            <label htmlFor='name'>Name :</label>
                            <input type="text"
                                className='h-[40px] bg-transparent border border-purple-400'
                                id='name' />
                        </div>
                        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                            <label htmlFor='email'>Email :</label>
                            <input type="text"
                                className='h-[40px] bg-transparent border border-purple-400'
                                id='email' />
                        </div>
                        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                            <label htmlFor='msg'>Message :</label>
                            <textarea
                                className='bg-transparent border border-purple-400'
                                id='msg' rows={8}>
                            </textarea>
                        </div>
                        <button className='bg-purple-400 p-2 px-6' data-aos="zoom-in-up">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default contact;