import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

const Work = () => {
    return (
        <Container id="Work">
            <Card>
                <h2 className='text-2xl max-padd:text-center'>
                    Sjöbergska Huset
                </h2>
                <div className='flex justify-between gap-4 flex-wrap mt-2'>
                    <div className='text-center max-padd:w-full'>
                        Internship 
                    </div>
                    <div className='max-mobil:mt-2 text-center max-padd:w-full'>
                        Sep 2023 - Dec 2023
                    </div>
                </div>
            </Card>
        </Container>
    );
}

export default Work;
