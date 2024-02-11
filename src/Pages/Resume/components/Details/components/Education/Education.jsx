import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

const courses = [
    { 
        title: "Programming for the Web" 
    },
    { 
        title: "Media Technology: Web Publishing" 
    },
    { 
        title: "Database-Based Publishing" 
    },
    { 
        title: "VIP: Research-Related Development Project. Basic Course" 
    },
    { 
        title: "Crossmedia: Multichannel Publishing" 
    },
    { 
        title: "Internship, Media Production" 
    },
    { 
        title: "Production Management" 
    },
    { 
        title: "Business Operations in the Media Industry" 
    },
    { 
        title: "Original Production" 
    },
    { 
        title: "Programming in C#" 
    },
    { 
        title: "Digital marketing" 
    }
];


const Education = ({ show }) => {
    return (
        <Container id="Education" show={show}>
            <Card>
                <h2 className='text-2xl max-md:text-center'>
                    Malmö University
                </h2>
                <div className='flex justify-between gap-4 flex-wrap mt-2'>
                    <div className='text-center max-md:w-full text-lg'>
                        Bachelor degree in Media technology
                    </div>
                    <div className='max-mobil:mt-2 text-center max-md:w-full text-lg'>
                        2021 - ongoing 
                    </div>
                </div>
                <div className='w-full my-2 flex md:justify-start justify-center'>
                    <div className='w-1/2 border-2 rounded-full h-0 border-caribbean_500'></div>
                </div>
                <div className='flex flex-wrap gap-8 justify-center'>
                    {
                        courses.map(course => (
                            <div className='p-2 border border-nobel_300 rounded-md'>
                                {
                                    course.title
                                }
                            </div>
                        ))
                    }
                </div>
            </Card>
        </Container>
    );
}

export default Education;
