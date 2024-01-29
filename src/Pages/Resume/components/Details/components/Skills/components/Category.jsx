import React from "react";
import Heading from "../../components/Heading";
import Skill from "./Skill";

const Category = ({ skillDetails, type }) => {
    const filteredSkills = skillDetails.filter((skill) => skill.type === type);

    return (
        <div className="flex flex-col">
            <Heading heading={type} />
            <div className="gap-6 flex-wrap flex">
                {filteredSkills.map((skill) => (
                    <div key={skill.skill} className="flex justify-center items-center flex-col">
                        <Skill item={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
