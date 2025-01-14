import React from 'react';
// import myImages from '../assets/mainesum.jpg';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const HomePage = () => {
  return (
    <div data-name="home" id='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full pr-20 '>
                <h2 className='text-4xl sm:text-3xl mt-10 font-bold text-white md:text-7xl md:mt-auto ' >
                I am a fullStack Developer
                </h2>
                <p className='Currpy-4 max-w-md text-gray-50'>
                I have 5 years of experiece building, designing and maintaining software appllications
                Currently, I work on web and mobile applications using the technologies
                NextJs (React JS), Tailwind css, TypeScript, Flutter(Dart), React Native, GraphQL, firebase and mongoDB
                </p>
                <div>
                    <button className='text-white text-6xl w-fit font-signature px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                    to-blue-500 cursor-pointer group '> {/**the group attribute is to make sure you group same props to another tag */}
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'> 
                            <MdOutlineKeyboardArrowRight size={35} className='ml-1' />
                        </span>
                    </button>
                </div>
            </div>
            {/* <Image src={myImages} alt='meh' className='rounded-2xl mx-auto opacity-55 '/> */}
        </div>
       
    </div>
  )
}

export default HomePage