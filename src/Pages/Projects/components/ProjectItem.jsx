import { IoIosArrowForward } from "react-icons/io";

const ProjectItem = ({ index, item }) => {


    return (
        <div key={index} className='flex-1 min-w-full md:min-w-[410px] max-w-[550px] lg:max-w-[600px] h-fit group rounded-md border border-nobel_400 shadow-middle shadow-nobel_400'>
            <div className="lg:h-96 w-full h-80 overflow-hidden lg:p-4 rounded-t-md transition-opacity duration-500 relative">
                <div className={`w-full bg-cover bg-center lg:rounded-md h-full lg:group-hover:opacity-30 lg:group-hover:scale-[1.20] transition duration-500 `} style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="absolute flex justify-center items-center h-full opacity-0 lg:group-hover:opacity-100 duration-500 delay-200 z-10 top-0 left-0 text-caribbean_500 w-full">
                    <div className=" absolute flex flex-col gap-4 justify-center h-full w-full text-whiteish">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className='text-5xl text-caribbean_500 transtion duration-500 font-bold tracking-widest'>
                            <div className="flex justify-center items-center">
                                {item.title}
                            </div>
                        </a>
                        {
                            !item.github && (
                                <div className="px-4">
                                    <p className="text-[16px]">
                                        {
                                            item.description
                                        }
                                    </p>
                                </div>
                            )
                        } 
                        <div className=" absolute bottom-0 h-20 flex justify-center items-center w-full">
                            {
                                item.url && (
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-2xl hover:text-caribbean_300 transtion duration-500">
                                        Visit <IoIosArrowForward />
                                    </a>
                                ) 
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-4 p-4'>
                <h2 className=' inline-block lg:hidden text-2xl font-bold tracking-widest'>
                    {item.title}
                </h2>
                <div className='flex flex-wrap w-full justify-center gap-4'>
                    {item.skills.map((skill, index) => (
                        <div className={`px-4 py-2 border flex-grow border-nobel_400 rounded-md`} key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
