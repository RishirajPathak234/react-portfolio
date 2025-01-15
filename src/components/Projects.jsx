import React from 'react'
import Portfolio from '../assets/SS1.png'
import fire from '../assets/SS2.png'
import alumni from '../assets/SS3.png'

import Cards from './Cards'


const Projects = () => {

  const projectJson = [
    {
      title: 'Portfolio Website',
      desc: 'This portfolio website showcases my skills as a web developer. Designed and built from scratch, it highlights my expertise in responsive design, clean code practices, and user-friendly layouts. Build using Technologies suh as HTML, CSS, JavaScript, it demonstrates my ability to deliver professional-grade projects with attention to detail.',
      image: Portfolio,
      live: "https://wwwrishirajsportfolio.netlify.app/",
      github: "https://github.com/RishirajPathak234/my-personal-portfolio-2"
    },
    {
      title: 'Automatic Fire Extinguisher For EVs',
      desc: 'This project addresses a critical safety concern for electric vehicles by providing an automated fire extinguishing system. Equipped with sensors and powered by an Arduino Uno, it detects temperature and smoke levels to activate the extinguisher in emergencies. The system is designed to enhance safety in EVs by offering a quick and reliable fire suppression solution.',
      image: fire,
      more: "https://drive.google.com/file/d/1IuJnuucONSfYrDO4SDm3PtyZI1Sr_sD-/view?usp=drive_link"
    },
    {
      title: 'Alumni Portal',
      desc: '?',
      image: alumni,
      live: "#",
      github: "#"
    },
    {
      title: '?',
      desc: '',
      image: alumni,
      live: "#",
      github: "#"
    },
    {
      title: '?',
      desc: '',
      image: alumni,
      live: "#",
      github: "#"
    },
  ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items) => {
            return <Cards item={items} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
