import React from 'react'
import Heading from '../../components/Heading'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'

const data = [
    {
        id: 0,
        title:"Currency Converter",
        desc:"A simple HTML and Typescript powered tool for converting currency with real-time rates",
        img: "/project-1.png",
        link :"https://github.com/shoaibkhalid111/Currency-Converter.git"

    },
    {
        id: 1,
        title:"Simple Calculator",
        desc:"A basic HTML and Typescript calculator for performing basic airthmetic operations",
        img: "/project-2.png",
        link :"https://github.com/shoaibkhalid111/Simple-Calculator.git"
   
       },
       {
        id: 2,
        title:"Simple CLI Calculator",
        desc:"A basic Typescript Command-Line calculator offering essential airthmetic operations",
        img: "/project-3.png",
        link :"https://github.com/shoaibkhalid111/Simple-CLI-Calculator.git"
   
       },
       {
        id: 3,
        title:"Static Interactive Resume",
        desc:"A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically",
        img: "/project-4.png",
        link :"https://github.com/shoaibkhalid111/Hackathone-Milestone.git"
   
       },
       {
        id: 4,
        title:"Shareable Resume",
        desc:"A Typescript-based shareable resume built with HTML and CSS, allowing users to share and download the resume giving a shareable link ",
        img: "/project-5.png",
        link :"https://github.com/shoaibkhalid111/Hackathone-Milestone.git"
   
       },
       {
        id: 5,
        title:"Editable Resume",
        desc:"A Typescript-based editable resume built with HTML and CSS, allowing users to edit the resume after generating",
        img: "/project-6.png",
        link :"https://github.com/shoaibkhalid111/Hackathone-Milestone.git"
   
       },
]


const projects = () => {
  return (
<>
<Navbar/>
<div id='projects' className='container pt-32 text-white'>
      <Heading title='MY PROJECTS'/> 
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=> (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        link={el.link}
        />))}
      </div>
      
    </div>
</>
  )
}

export default projects
