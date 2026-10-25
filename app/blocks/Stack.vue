<template>
    <section
        id="tech"
        class="flex items-center justify-center py-16 md:py-24 lg:py-48 2xl:py-64 px-3 md:px-6 lg:px-12">
        <div
            class="flex flex-col items-center justify-between lg:px-12 space-y-12 2xl:space-y-24"
        >
            <div class="mx-auto">
                <span class="text-primary">$</span> cat stack.txt
            </div>
            <div ref="containerRef" class="max-w-480">
                <p
                    ref="textRef"
                    class="text-center text-lg leading-relaxed tracking-wide text-black/80 text-pretty md:text-2xl lg:text-3xl 2xl:text-5xl">
                    {{ text }}
                </p>
            </div>

            <div class="w-full overflow-hidden">
                <div class="grid grid-cols-12">
                    <StackCard
                        v-for="item in orderedItems"
                        :key="item.key"
                        :stack="item"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stackItems } from '~/constants/stack'

gsap.registerPlugin(ScrollTrigger)

const { items = [] } = defineProps<{
    items?: Stack[]
}>()

const text = 'Genom arbete med både kod och design har jag utvecklat ett helhetsperspektiv på digitala produkter. Det har jag med mig när jag bygger och tänker.'

const resolvedItems = computed<Stack[]>(() => (items.length > 0 ? items : stackItems))

const largeTechItems = computed(() => resolvedItems.value.filter(item => item.size === 'large'))

const smallTechItems = computed(() => resolvedItems.value.filter(item => item.size === 'small'))

const orderedItems = computed(() => [...largeTechItems.value, ...smallTechItems.value])

const containerRef = ref<HTMLDivElement | null>(null)

const textRef = ref<HTMLParagraphElement | null>(null)

let animation: GSAPTimeline

onMounted(() => {
    animation = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none',
        },
    })

    animation.fromTo(containerRef.value, {
        clipPath: 'inset(0% 0% 100% 0%)',
    }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.9,
        ease: 'power3.out',
    })

    animation.fromTo(textRef.value, {
        opacity: 0,
        y: 200,
    }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
    }, '<0.1')
})

onBeforeUnmount(() => {
    animation?.kill()
})
</script>
