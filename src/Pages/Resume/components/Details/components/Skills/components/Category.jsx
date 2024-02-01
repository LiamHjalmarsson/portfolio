import React from "react";
import Heading from "../../components/Heading";
import Skill from "./Skill";
import Card from "../../components/Card";

const Category = ({ skillDetails, type }) => {
    const filteredSkills = skillDetails.filter((skill) => skill.type === type);

    return (
        <Card custom={"justify-start"}>
            <Heading heading={type} />
            <div className="flex gap-8 flex-wrap justify-center">
                {filteredSkills.map((skill) => (
                    <div key={skill.skill} className="flex justify-center items-center flex-col h-auto">
                        <Skill item={skill} />
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Category;


