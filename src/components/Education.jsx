import { faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Spinner from './Spinner';
import AOS from "aos";
import "aos/dist/aos.css";
const Education = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='wrapper' id='education' >
            <h1 className='ndv__title'>EDUCATION</h1>
            <div className='sm:text-sm'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='flex items-center justify-between text-second_color'>
                        <div className='pl-4 text-2xl font-semibold md:text-xl sm:text-sm w-[70%]'>
                            <FontAwesomeIcon className='mr-5' icon={faGraduationCap} />
                            Posts and Telecommunications Institute of Technology
                        </div>
                        <div>
                            <p>August 2019 - December 2023</p>
                        </div>
                    </div>
                    <h4 className='flex items-center mt-4 leading-6'>
                        <Spinner />
                        <span className='ml-2'>Graduated from the Posts and Telecommunications Institute of Technology (PTIT), majoring in Information Technology.</span>
                    </h4>
                    <h4 className='flex items-center mt-4 leading-6'>
                        <Spinner />
                        <span className='ml-2'>So far, I study a lot about career development in information technology and then I decide to choose web programming because I particularly like customize and draw on my websites.</span>
                    </h4>
                    <h4 className='flex items-center mt-4 leading-6'>
                        <Spinner />
                        <span className='ml-2'>During my time at university, I focused on building a solid foundation in software development, web technologies, and problem-solving.</span>
                    </h4>
                    <h4 className='flex items-center mt-4 leading-6'>
                        <Spinner />
                        <span className='ml-2'>My graduate was 3.0/4.0.</span>
                    </h4>
                </div>
                <div className='mt-4' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="4500">
                    <div className='pl-4 text-2xl font-semibold text-second_color md:text-xl sm:text-lg'>
                        <FontAwesomeIcon className='mr-5' icon={faCertificate} />
                        Certification
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h4 className='flex items-center mt-4 text-base leading-6 sm:text-sm'>
                                <Spinner />
                                <span className='ml-2'>TOEIC:810/990</span>
                            </h4>
                        </div>
                        <div>
                            <p className='text-second_color sm:text-xs sm:mt-[14px]'>26/07/2022 - 26/07/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;

