import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';


let interestsData = [
    {
        heading: "Running",
        text: "Keeping myself active with running."
    },
    {
        heading: "Food",
        text: "I like to cook and discover new food from different parts of the world."
    },
    {
        heading: "Dogs",
        text: "I love spending time with my two golden retrievers. They bring joy even on a rainy day."
    }
];

const Interests = () => {
    return (
        <Container id="Interests">
            {interestsData.map((interest, index) => (
                <Card key={index}>
                    <Heading heading={interest.heading} />
                    <div className='flex justify-between flex-wrap mt-2'>
                        <div className='text-center w-full'>
                            {interest.text}
                        </div>
                    </div>
                </Card>
            ))}
        </Container>
    );
}

export default Interests;
