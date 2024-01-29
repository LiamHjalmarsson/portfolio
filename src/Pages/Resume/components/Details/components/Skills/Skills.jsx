import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Category from "./components/Category";

const Skills = ({show}) => {
    let skillDetails = [
        {
            skill: "html",
            icon: "bg-html",
            level: "intermediate",
            type: "front-end",
            percentage: 100,
        },
        {
            skill: "css",
            icon: "bg-css",
            level: "advanced",
            type: "front-end",
            percentage: 80,
        },
        {
            skill: "js",
            icon: "bg-js",
            level: "intermediate",
            type: "front-end",
            percentage: 80,
        },
        {
            skill: "react",
            icon: "bg-react",
            level: "advanced",
            type: "front-end",
            percentage: 80,
        },
        {
            skill: "tailwind",
            icon: "bg-tailwind",
            level: "intermediate",
            type: "front-end",
            percentage: 80,
        },
        {
            skill: "php",
            icon: "bg-php",
            level: "intermediate",
            type: "back-end",
            percentage: 80,
        },
        {
            skill: "laravel",
            icon: "bg-laravel",
            level: "intermediate",
            type: "back-end",
            percentage: 80,
        },
        {
            skill: "figma",
            icon: "bg-figma",
            level: "Advanced",
            type: "ui/ux",
            percentage: 80,
        },
        {
            skill: "webflow",
            icon: "bg-webflow",
            level: "intermediate",
            type: "ui/ux",
            percentage: 80,
        },
        {
            skill: "svelte",
            icon: "bg-svelte",
            level: "intermediate",
            type: "front-end",
            percentage: 80,
        },
    ];

    const skillTypes = ["front-end", "back-end", "ui/ux"];

    return (
        <Container id="Skills" show={show}>
            <Card show={show} id="Skills">
                {skillTypes.map((type, typeIndex) => (
                    <Category key={typeIndex} skillDetails={skillDetails} type={type} show={show} />
                ))}
            </Card>
        </Container>
    );
};

export default Skills;
