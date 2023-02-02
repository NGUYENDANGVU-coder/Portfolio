import React from 'react';
import ReactTyped from 'react-typed';
import image from '../assets/img/image';
import * as Icon from "../assets/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faHandsWash } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    return (
        <div className='lg:mt-header md:px-8 lg:px-[150px] sm:px-5 mt-0 flex h-[90vh] relative items-center justify-between' id='home'>
            <div>
                <h2 className='text-xl sm:text-base text-gray-400'>Hi,I'm Dang Vu <i className='[color:#1c8cc2eb]'><FontAwesomeIcon icon={faHandsWash} /></i></h2>
                <div className='text-5xl sm:text-base md:text-3xl py-10'>
                    <ReactTyped
                        strings={[
                            'Welcome to my Portfolio',
                            'I am a Web Developer',
                            'Nice to meet you!']}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop >
                        <input type="text" className='bg-transparent placeholder:text-white' />
                    </ReactTyped>
                </div>
                <button className='ndv__button'>
                    Download CV
                    <i className='ml-2'>
                        <FontAwesomeIcon icon={faFileLines} />
                    </i>
                </button>
            </div>
            <div className='h-[400px] w-[400px] sm:w-[300px] sm:h-[200px]'>
                <img src={image.avata} alt="avt" className='ndv__img animate-profile_animate shadow-avt_shadow' />
            </div>
            <div className='absolute left-[48%] bottom-[20px]'>
                <p className='text-sm ml-[-26px] mb-2'>Scroll down</p>
                <div className='pt-6 animate-bounce' >
                    {<Icon.DownIcon />}
                </div>
            </div>
        </div>
    );
}

export default Home;
