<template>
    <div
        data-stack-card
        class="relative w-full px-3 pb-6 md:px-6 lg:px-12"
        :style="{ zIndex: index + 1 }"
    >
        <div
            data-stack-inner
            class="relative origin-top overflow-hidden rounded-3xl border border-white/10 bg-black text-white shadow"
        >
            <span
                class="pointer-events-none absolute -right-3 select-none text-[9rem] font-bold leading-none tracking-tighter text-primary/6 lg:-bottom-6 lg:text-[16rem]"
                aria-hidden="true"
            >
                {{ index + 1 }}
            </span>

            <div class="flex flex-wrap h-14 items-center gap-x-4 gap-y-2 border-b border-white/10 px-5 py-4 font-mono text-xs md:px-8 lg:px-12">
                <span class="text-primary">commit {{ background.title }}</span>

                <span
                    v-if="index === 0"
                    class="text-terminal"
                >
                    (HEAD → nu)
                </span>

                <span class="rounded-full border border-white/15 px-2.5 py-0.5 text-white/70">
                    {{ background.type === 'work' ? 'arbete' : 'utbildning' }}
                </span>
            </div>

            <div class="relative flex flex-col gap-8 p-5 font-light md:p-8 lg:gap-12 lg:p-12">
                <div class="flex max-sm:flex-col justify-between sm:items-center gap-5">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                        {{ background.title }}
                    </h2>

                    <p class="flex items-center gap-2 text-sm md:text-base tracking-widest text-white/80 md:text-right uppercase font-medium">
                        <Icon
                            :name="background.type === 'work' ? 'mdi:office-building-outline' : 'mdi:school-outline'"
                            size="24"
                        />

                        {{ background.company }}
                    </p>
                </div>

                <p class="text-md text-pretty leading-relaxed tracking-widest text-white/80 md:text-lg lg:text-xl 2xl:text-2xl">
                    {{ background.description }}
                </p>

                <ul
                    ref="listRef"
                    class="grid gap-3 lg:gap-6 lg:grid-cols-2 2xl:grid-cols-3"
                >
                    <li
                        v-for="(skill, itemIndex) in background.skills"
                        :key="itemIndex"
                    >
                        <div class="h-full rounded-2xl border border-white/10 bg-white/3 p-6 lg:p-8">
                            <div class="flex items-center gap-5 mb-5">
                                <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-primary-500">
                                    <Icon
                                        name="mdi:office-building-outline"
                                        size="24"
                                    />
                                </span>

                                <h3 class="text-lg md:text-xl font-semibold tracking-wide text-white">
                                    {{ skill.title }}
                                </h3>
                            </div>

                            <span
                                v-if="skill.description"
                                class="text-base leading-relaxed tracking-wide text-white/80"
                            >
                                {{ skill.description }}
                            </span>

                            <div class="flex flex-wrap gap-3" v-if="skill.tags">
                                <span
                                    v-for="tag in skill.tags"
                                    :key="tag"
                                    class="rounded-full border border-white/10 px-3 py-1 font-mono text-base text-white/70 transition group-hover:border-white/20"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { index, total, background } = defineProps<{
    background: Background
    index: number
    total: number
}>()

const listRefs = ref<HTMLUListElement[]>([])

let animations: GSAPTimeline[] = []

onMounted(() => {
    animations = listRefs.value.map((list) => {
        const animation = gsap.timeline({
            scrollTrigger: {
                trigger: list,
                start: 'top 85%',
            },
        })

        animation.fromTo(list.children, {
            autoAlpha: 0,
            y: 120,
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
        })

        return animation
    })
})

onBeforeUnmount(() => {
    animations.forEach(animation => animation.kill())
})
</script>
