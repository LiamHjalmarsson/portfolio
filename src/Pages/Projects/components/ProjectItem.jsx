import { useState } from "react";
import BottomCard from "./BottomCard";
import TopCard from "./TopCard";

const ProjectItem = ({ index, item }) => {
    let [show, setShow] = useState(false);

    let showHandler = () => {
        setShow(!show);
    }

    return (
        <div key={index} className='flex-1 min-w-full md:min-w-[410px] lg:min-w-[450px] max-w-[550px] lg:max-w-[600px] h-fit group rounded-md border border-nobel_400 shadow-middle shadow-nobel_400'>
            <TopCard item={item} show={show} />
            <BottomCard item={item} showHandler={showHandler} show={show}  />
        </div>
    );
}

export default ProjectItem;
