import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

const Interests = () => {
    return (
        <Container id="Interests">
            <Card>
                <h2 className='text-2xl max-md:text-center'>
                    Running
                </h2>
                <div className='flex justify-between flex-wrap mt-2'>
                    <div className='text-center w-full'>
                        Keeping my self active with running 
                    </div>
                </div>
            </Card>
            <Card>
                <h2 className='text-2xl max-md:text-center'>
                    Food
                </h2>
                <div className='flex justify-between flex-wrap'>
                    <div className='text-center w-full'>
                        I like to cook and discover new food from different parts of the world.
                    </div>
                </div>
            </Card>
            <Card>
                <h2 className='text-2xl max-md:text-center'>
                    Dogs
                </h2>
                <div className='flex justify-between flex-wrap mt-2'>
                    <div className='text-center w-full'>
                        I love spending time with my two golden retrivers. They bring joy even on a rain. 
                    </div>
                </div>
            </Card>
        </Container>
    );
}

export default Interests;
