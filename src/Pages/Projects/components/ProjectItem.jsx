import BottomCard from "./BottomCard";
import TopCard from "./TopCard";

const ProjectItem = ({ index, item }) => {
    return (
        <div key={index} className='flex-1 min-w-full md:min-w-[410px] lg:min-w-[450px] max-w-[550px] lg:max-w-[600px] h-fit group rounded-md border border-nobel_400 shadow-middle shadow-nobel_400'>
            <TopCard item={item} />
            <BottomCard item={item}/>
        </div>
    );
}

export default ProjectItem;
