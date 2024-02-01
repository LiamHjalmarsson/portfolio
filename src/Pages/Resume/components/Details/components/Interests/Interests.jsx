import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

const Interests = () => {
    return (
        <Container id="Interests">
            <Card>
                <h2 className='text-2xl max-md:text-center'>
                    Traning
                </h2>
                <div className='flex justify-between gap-4 flex-wrap mt-2'>
                    <div className='text-center max-md:w-full'>
                        I belive in an active life style where working out and activeating my body
                    </div>
                </div>
            </Card>
        </Container>
    );
}

export default Interests;
