
const ProjectItem = ({ index, item }) => {
    let skillType = (skill) => {
        if (skill === "figma") {
            return "purple";
        } else if (skill === "css") {
            return "blue";
        } else if (skill === "js") {
            return "yellow";
        }
    }

    return (
        <div key={index} className='flex-1 min-w-96 h-fit rounded-md border border-nobel_300'>
            <div className="lg:h-96 w-full h-80 overflow-hidden p-4 rounded-md">
                <div className={`w-full bg-cover bg-center rounded-md h-full hover:scale-[1.20] transition duration-500`} style={{ backgroundImage: `url(${item.image})` }}></div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-4 p-4'>
                <h2 className='text-2xl font-bold tracking-widest'>
                    {item.title}
                </h2>
                <div className='flex w-full justify-center lg:justify-end gap-4'>
                    {item.skills.map((skill, index) => (
                        <div className={`px-4 py-2 border ${"border-" + skillType(skill) + "-500"} rounded-md`} key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;