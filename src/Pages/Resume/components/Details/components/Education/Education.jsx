import React from 'react';
import Container from '../components/Container';

const Education = () => {
    return (
        <Container id="education">
            <div>
                <h2 className='text-2xl max-padd:text-center'>
                    Malmö University
                </h2>
                <div className='flex justify-between gap-4 flex-wrap mt-2'>
                    <div className='text-center max-padd:w-full'>
                        Bachelor degree in Media technology
                    </div>
                    <div className='max-mobil:mt-2 text-center max-padd:w-full'>
                        2021 - 2024
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Education;
