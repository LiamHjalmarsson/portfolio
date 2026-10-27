
import { technologies, type TechnologyId } from './technologies'

export interface StackItem {
    key: TechnologyId
    label: string
    logo?: string
    size: 'small' | 'large'
}

const featuredTechnologies: TechnologyId[] = [
    'vue',
    'laravel',
    'typescript',
    'nuxt',
    'gsap',
    'tailwind',
    'postgresql',
    'node',
    'react',
]

export const stackItems: StackItem[] = featuredTechnologies.map(key => {
    const technology = technologies[key]

    return {
        ...technology,
        key,
        size: 'size' in technology ? technology.size : 'small',
    }
})

