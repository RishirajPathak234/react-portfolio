// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';



// // import required modules
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Quote, Star } from 'lucide-react';

// const Testimonials = () => {

//     const testimonials = [
//         {
//             id: 1,
//             name1: "School",
//             rating: 5,
//             text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
//         },
//         {
//             id: 2,
//             name2: "Michael Chen",
//             rating: 4,
//             text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
//         },
//         {
//             id: 3,
//             name: "Sarah Thompson",
//             rating: 5,
//             text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
//         },
//         {
//             id: 4,
//             name: "David Rodriguez",
//             rating: 5,
//             text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
//         },
//         {
//             id: 5,
//             name: "Lisa Patel",
//             rating: 4,
//             text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
//         }
//     ]

//     return (
//         <div id='testimonials' className='py-10 bg-gray-100 relative' >
//             <h1 className='text-center text-2xl lg:text-4xl font-bold'>Education</h1>
//             <div className='max-w-6xl mx-auto py-10 px-5'>
//                 <Swiper
//                     style={{
//                         "--swiper-pagination-color": "#EF4444",
//                         "--swiper-pagination-bullet-inactive-color": "#999999",
//                         "--swiper-pagination-bullet-inactive-opacity": "1",
//                         "--swiper-pagination-bullet-size": "10px",
//                         "--swiper-pagination-bullet-horizontal-gap": "6px",
//                     }}
//                     modules={[Pagination, Autoplay]}
//                     loop={true}
//                     speed={600}
//                     autoplay={{ delay: 5000 }}
//                     slidesPerView={3}
//                     spaceBetween={30}
//                     breakpoints={{
//                         320: { slidesPerView: 1 },
//                         480: { slidesPerView: 1 },
//                         768: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                     pagination={{
//                         el: ".swiper-pagination",
//                         type: "bullets",
//                         clickable: true,
//                     }}
//                     className="mySwiper"
//                 >
//                     {testimonials.map((item) => {
//                         return <SwiperSlide key={item.id}>
//                             <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
//                                 {item.rating === 4 ? (
//                                     <div className='flex'>
//                                         <Star fill='true' />
//                                         <Star fill='true' />
//                                         <Star fill='true' />
//                                         <Star fill='true' />
//                                         <Star />
//                                     </div>
//                                 ) : (
//                                     <div className='flex'>
//                                         <Star fill='true' />
//                                         <Star fill='true' />
//                                         <Star fill='true' />
//                                         <Star fill='true' />
//                                         <Star fill='true' />
//                                     </div>
//                                 )}
//                                 <p className='py-3'>{item.text}</p>
//                                 <div className='flex justify-between items-center'>
//                                     <div>
//                                         <h3 className='font-semibold text-red-500 text-lg'>{item.name1}</h3>
//                                         <p className='text-sm mt-1'>R.S. Mundle Engilsh School and Jr. College</p>
//                                     </div>


//                                     <Quote className='text-red-400'/>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     })}
//                     <div className='swiper-pagination my-10 gap-1 relative'></div>

//                 </Swiper>
//             </div>
//         </div>
//     )
// }

// export default Testimonials


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "School and High School",
            text: "I completed my school and high school education at R.S. Mundle English School and Jr. College, where I developed a strong foundation in core subjects such as English, Maths, Science etc. Throughout my academic journey. My education allowed me to build both technical and problem-solving skills, preparing me for future challenges.",
            institution: "R.S. Mundle English School and Jr. College",
        },
        {
            id: 2,
            name: "Polytechnic (Diploma)",
            text: "I earned my Polytechnic diploma from G.H. Raisoni Institute of Engineering and Technology in the Computer Engineering (CO) branch. During my diploma, I gained proficiency in programming languages like C++ and Python, along with a solid foundation in database management and computer networks.I successfully completed a project on Automatic Fire Extinguisher For EVs using Embedded C/C++, which enhanced my knowledge of real-world software development. Additionally, I completed an internship at Sampurv Technologies, where I worked on Salesforce (Admin Module). These experiences honed my technical and problem-solving skills while fostering teamwork and adaptability.",
            institution: "G.H. Raisoni Institute of Engineering and Technology",
        },
        {
            id: 3,
            name: "Internship",
            text: "I have successfully completed my internship at Sampurv Technologies, where I gained hands-on experience and deepened my expertise in Salesforce (Admin Module) by Trailhead. During my time there, I worked on Salesforce Real-Time Project that allowed me to apply and enhance my skills. This experience has equipped me with Open-ended questioning, Active listening, Reading body language and facial expressions, Mirroring conversation, Building rapport, Showing empathy, Negotiating, Persuading, Guiding instead of selling and prepared me to take on future challenges in the Salesforce CRM domain..",
            institution: "Sampurv Technologies",
        },
        {
            id: 4,
            name: "Engineering (B.Tech)",
            text: "I am currently pursuing my B.Tech in Electronics and Computer Science (ECS) at Ramdeobaba College of Engineering and Management. My coursework includes advanced topics like embedded systems, artificial intelligence, and IoT, which have helped me strengthen my technical knowledge. I am actively involved in a project on Alumini Portal aimed at optimizing energy consumption in real-time. Additionally, I have collaborated on designing and programming autonomous systems. These experiences are shaping my aspiration to specialize in AI-driven automation solutions in the future.",
            institution: "Ramdeobaba College of Engineering and Management",
        },
    ];

    const [activeSlide, setActiveSlide] = useState(null);

    const handleSlideClick = (id) => {
        setActiveSlide(id === activeSlide ? null : id);
    };

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative text-center'>
            <h1 className='text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 border-b-4 border-black w-max pb-4 mx-auto'>Education</h1>
           
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div 
                                    className={`border border-gray-800 shadow-md shadow-red-500 rounded-lg flex flex-col p-4 transform transition-transform duration-300 ${activeSlide === item.id ? 'scale-105 rotate-3d' : 'scale-100'}`}
                                    onClick={() => handleSlideClick(item.id)}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        perspective: '1000px',
                                    }}
                                >
                                    <div 
                                        className='hover:rotate-y-6 hover:rotate-x-6 transition-transform duration-500'
                                        style={{
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        <p className='py-3 text-lg text-black-900'>{item.text}</p>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <h3 className='font-semibold text-red-600 text-xl'>{item.name}</h3>
                                                <p className='text-lg mt-1 font-bold underline'>{item.institution}</p>
                                            </div>
                                            <Quote className='text-red-400'/>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
