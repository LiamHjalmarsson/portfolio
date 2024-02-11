import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

const Work = () => {
    return (
        <Container id="Work">
            <Card>
                <h2 className='text-2xl max-md:text-center'>
                    Sjöbergska Huset
                </h2>
                <div className='flex justify-between gap-4 flex-wrap'>
                    <div className='text-center max-md:w-full text-lg '>
                        Internship 
                    </div>
                    <div className='max-mobil:mt-2 text-center max-md:w-full text-lg '>
                        Sep 2023 - Dec 2023
                    </div>
                </div>
                <div className='w-full my-2 flex md:justify-start justify-center'>
                    <div className='w-1/2 border-2 rounded-full h-0 border-caribbean_500'></div>
                </div>
                <div>
                    During this period, i had the opportunity to work on various projects and tasks using different tools, primarily Figma and Webflow. One off the more notable project involved working on a pro-bono case for an organization.                
                </div>
            </Card>
        </Container>
    );
}

export default Work;
