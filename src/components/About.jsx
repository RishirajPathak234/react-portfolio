import React from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import clogo from '../assets/letter-c.png'
import Tailwind from '../assets/Tailwind Css.png'
import cpplogo from '../assets/c-.png'
import pythonlogo from '../assets/python.png'
import dblogo from '../assets/firebase.png'
import salesforcelogo from '../assets/salesforce.png'
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-blue-200 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Rishiraj Pathak</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto'>
                            A Web Developer with Command in HTML, CSS, JS and ReactJS
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h2 className='text-2xl font-semibold text-black'> <strong>About</strong></h2>
                                <p className='mt-4 text-lg text-gray-700'>
                                    Myself Rishiraj U. Pathak, everyone would like to know about me that I am an Eager, Driven and passionate coder with a strong interest in creating innovative IT-based software and hardware projects. With a background in Electronics and Computer Science. My enthusiasm for technology likely drives you to explore new tools, frameworks, and hardware solutions, integrating them into creative, hands-on projects. Whether it's developing code, building circuits, or tackling challenging problems, you enjoy pushing boundaries and applying your skills in practical, impactful ways.
                                </p>


                            </div>




                            <div className='border border-blue-300 rounded-lg md:p-9 py-9  flex flex-col gap-8 items-center shadow-lg shadow-blue-950'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills with Command</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={clogo} alt="" className='w-8' />
                                        <span className='font-semibold'> C </span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={cpplogo} alt="" className='w-10' />
                                        <span className='font-semibold'>C++</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={pythonlogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Python</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={dblogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Firebase Database (Google)</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={salesforcelogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Salesforce (Admin Module)</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-900'>
                                        <img src={gitlogo} alt="" className='w-10' />
                                        <span className='font-semibold'> Git </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className=' text-2xl font-semibold text-black mt-0 '><b>Certifications & Achievements🏆</b></h2>
                                <b> <h2 className='mt-3'>◉ Aspire International Conference (Edition-5)</h2></b>
                                <p className='mt-4 text-lg text-gray-700'>
                                    I am proud to have earned a certificate in the prestigious "Aspire International Competition (Edition-5)" which was held in 19th & 20th April 2024, a globally recognized platform for students to showcase their talents and skills.
                                </p>
                                <a href="https://drive.google.com/file/d/19CT9NWANdxztFIyeU9XPJw7PZ16KjzQ_/view?usp=drive_link" target='_blank' className='mt-3 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>View Certificate</a>

                                <b><h2 className='mt-6 '>◉ Salesforce Administrator</h2></b>
                                <p className='mt-4 text-lg text-gray-700'>
                                    I have successfully completed the Salesforce Administrator course as an Internship from Sampurv Technologies and earned a certificate. In this Internship Course, I have learned about the Salesforce platform, its features, functionalities, and how to use it to manage and customize Salesforce applications.
                                </p>
                                <a href="https://drive.google.com/file/d/1yEHAFZyRS0qlS_c0wZKI00BEpHC2YZs2/view?usp=drive_link" target='_blank' className='mt-3 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>View Certificate</a>


                            </div>

                            <div>
                                <b><h2 className='mt-0'>◉ TECHNOPOLY (Project Competition)</h2></b>
                                <p className='mt-4 text-lg text-gray-700'>
                                    I have participated in the "Technopoly" competition held at the prestigious "G.H. Raisoni Institute of Engineering and Technology" and have successfully won the competition with the Title "Best Innovation". In this competition, I have showcased my project "Automatic Fire Extinguisher For Electric Vehicles" which was based on the Internet of Things (IoT).</p>
                                <a href="https://drive.google.com/file/d/1qMudNppi6tSEuAV2PoqBbbCwhOAu8BO5/view?usp=sharing" target='_blank' className='mt-3 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>View Certificate</a>

                                <b><h2 className='mt-6'>◉ Excellence Certifications</h2></b>
                                <p className='mt-4 text-lg text-gray-700'>
                                    I am honored to have earned a Certificate of Excellence in the prestigious "Sum-2023 MSBTE" Examination, representing my dedication to academic excellence during my time at "G.H. Raisoni Institute of Engineering and Technology". This recognition highlights not only my commitment to mastering the core principles of my field but also the support and quality education provided by my institution. Achievements like this inspire me to continue striving for success and exploring new opportunities for growth and learning. </p>
                                <a href="https://drive.google.com/file/d/1hRtm4Grz_ku0cTob_nCU6vfCpRwZLxeL/view?usp=drive_link" target='_blank' className='mt-3 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>View Certificate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About
