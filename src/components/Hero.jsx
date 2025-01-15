import React from 'react'
import hero from '../assets/Hero.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'
import csslogo from '../assets/CSS.png'
import htmllogo from '../assets/Html.png'
import gitlogo from '../assets/github.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug text-white'>Hi There, <br />I'm Rishiraj <span className='text-red-500'>Pathak</span></h1>
               <p className='md:text-2xl text-xl mb-4 text-white'>Web Developer & Designer</p>
               <p className='mb-4 text-white'>I'm a passionate and eager web developer with command in React, HTML, CSS, JS and modern web technologies. </p>
               <button className='bg-white text-black px-3 py-2 w-max rounded-md hover:text-white hover:bg-blue-500'><a href="https://drive.google.com/file/d/1TOWxhQ4VDpZfRXxmX_AtxhqxEi8OU3wY/view?usp=drive_link" download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={hero} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={csslogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={htmllogo} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
                  
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-blue-300 p-4 md:flex flex-col gap-6 rounded-full'> 
        <img src={gitlogo} alt="" className='w-20'/>
        <img src={instagram} alt="" className='w-20'/>
        <img src={twitter} alt="" className='w-20'/>
        <img src={linkedin} alt="" className='w-20'/>
      </div>
    </section>
  )
}

export default Hero
