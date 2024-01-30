import React from "react";
import Heading from "../../components/Heading";
import Skill from "./Skill";

const Category = ({ skillDetails, type }) => {
    const filteredSkills = skillDetails.filter((skill) => skill.type === type);

    return (
        <div className="flex shadow-sm shadow-caribbean_800 flex-col p-4">
            <Heading heading={type} />
            <div className="flex gap-6">
                {filteredSkills.map((skill) => (
                    <div key={skill.skill} className="w-fit flex justify-center items-center flex-col">
                        <Skill item={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
