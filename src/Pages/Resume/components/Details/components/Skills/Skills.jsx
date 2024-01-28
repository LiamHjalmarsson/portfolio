import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Item from "./components/Item";

const Skills = () => {
    let skillDetails = [
        {
            skill: "html",
            icon: "bg-html",
            level: "intermediate",
            type: "front-end",
        },
        {
            skill: "css",
            icon: "bg-css",
            level: "advanced",
            type: "front-end",
        },
        {
            skill: "js",
            icon: "bg-js",
            level: "intermediate",
            type: "front-end",
        },
        {
            skill: "react",
            icon: "bg-react",
            level: "advanced",
            type: "front-end",
        },
        {
            skill: "tailwind",
            icon: "bg-tailwind",
            level: "intermediate",
            type: "front-end",
        },
        {
            skill: "php",
            icon: "bg-php",
            level: "intermediate",
            type: "back-end",
        },
        {
            skill: "laravel",
            icon: "bg-laravel",
            level: "intermediate",
            type: "back-end",
        },
        {
            skill: "figma",
            icon: "bg-figma",
            level: "Advanced",
            type: "ui/ux",
        },
        {
            skill: "webflow",
            icon: "bg-webflow",
            level: "intermediate",
            type: "ui/ux",
        },
        {
            skill: "svelte",
            icon: "bg-svelte",
            level: "intermediate",
            type: "front-end",
        },
    ];

    let skillTypes = ["front-end", "back-end", "ui/ux"];

    return (
        <Container id="skills">
            {skillTypes.map((type, typeIndex) => (
                <Card key={typeIndex}>
                    <div className="flex gap-8 justify-center flex-wrap">
                        {skillDetails
                            .filter((skill) => skill.type === type)
                            .map((skill) => (
                                <div key={skill.skill} className="flex justify-center items-center flex-col">
                                    <Item item={skill} />
                                </div>
                            ))}
                    </div>
                </Card>
            ))}
        </Container>
    );
};

export default Skills;
