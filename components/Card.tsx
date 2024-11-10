import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    link:string;
}

const Card:React.FC<propsType> = ({title, desc, img, link}) => {
  return (
    <div className='border border-purple-400 w-[300px] sm:w-[420px]' data-aos="zoom-in-up">
        <div>
            <Image className='w-[300px] sm:w-[420px] h-[350px]'
            src={img}
            width={350}
            height={350}
            alt={title}
            />
        </div>
        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight '>{title}</div>
            <div>{desc}</div>
            <div>
                {link}
            </div>
        </div>
    </div>
  )
}

export default Card
