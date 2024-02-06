const ProjectItem = ({ index, item }) => {

    return (
        <div key={index} className='flex-1 min-w-full md:min-w-[410px] max-w-[550px] lg:max-w-[600px] h-fit group rounded-md border border-nobel_400 shadow-middle shadow-nobel_400'>
            <div className="lg:h-96 w-full h-80 overflow-hidden lg:p-4 rounded-t-md transition-opacity duration-500 relative">
                <div className={`w-full bg-cover bg-center lg:rounded-md h-full lg:group-hover:opacity-30 lg:group-hover:scale-[1.20] transition duration-500 `} style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="absolute opacity-0 lg:group-hover:opacity-100 duration-500 delay-200 z-10 top-[50%] left-[0%] text-caribbean_500 w-full">
                    <h2 className='text-4xl font-bold tracking-widest'>
                        {item.title}
                    </h2>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-4 p-4'>
                <h2 className=' inline-block lg:hidden text-2xl font-bold tracking-widest'>
                    {item.title}
                </h2>
                <div className='flex flex-wrap w-full justify-center gap-4'>
                    {item.skills.map((skill, index) => (
                        <div className={`px-4 py-2 border border-nobel_400 rounded-md`} key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
