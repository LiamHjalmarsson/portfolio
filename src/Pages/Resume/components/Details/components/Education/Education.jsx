import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

const Education = ({show}) => {
    return (
        <Container id="Education" show={show}>
            <Card>
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
            </Card>
        </Container>
    );
}

export default Education;
