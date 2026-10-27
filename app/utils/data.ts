
import { technologies, type TechnologyId } from '~/data/technologies'
import { skills, type SkillId } from '~/data/skills'
import { backgroundData } from '~/data/background'
import { projectsData } from '~/data/projects'

export function getTechnology(id: TechnologyId) {
    return {
        id,
        ...technologies[id],
    }
}

export function getSkill(id: SkillId) {
    return {
        id,
        ...skills[id],
    }
}

export function getTechnologies(ids: TechnologyId[]) {
    return ids.map(getTechnology)
}

export function getSkills(ids: SkillId[]) {
    return ids.map(getSkill)
}

export function getProjectsByTechnology(id: TechnologyId) {
    return projectsData.filter(project =>
        project.technologies?.includes(id),
    )
}

export function getBackgroundByTechnology(id: TechnologyId) {
    return backgroundData.filter(background =>
        background.skills.some(group =>
            group.technologies?.includes(id),
        ),
    )
}

export function getProjectsBySkill(id: SkillId) {
    return projectsData.filter(project =>
        project.skills?.includes(id),
    )
}
