<template>
    <div
        ref="containerRef"
        class="overflow-hidden"
        :class="wrapperClass"
    >
        <span
            v-for="line in textLines"
            :key="line"
            ref="lineRefs"
            :class="lineClass"
        >
            {{ line }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const {
    text,
    wrapperClass = '',
    lineClass = 'block leading-relaxed tracking-wide text-pretty text-sm md:text-md lg:text-xl 2xl:text-3xl',
} = defineProps<{
    text: string
    wrapperClass?: string
    lineClass?: string
}>()

const containerRef = ref<HTMLDivElement | null>(null)

const lineRefs = ref<HTMLSpanElement[]>([])

const textLines = computed(() => text.split('\n').filter(line => line.trim() !== ''))

let animation: GSAPTimeline

onMounted(() => {
    animation = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.value,
            start: 'top 115%',
            toggleActions: 'play none none none',
        },
    })

    animation.fromTo(containerRef.value, {
        clipPath: 'inset(0% 0% 100% 0%)',
    }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.8,
        ease: 'power3.out',
    })

    animation.fromTo(lineRefs.value, {
        opacity: 0,
        y: 24,
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        clearProps: 'transform',
    }, '<0.1')
})

onBeforeUnmount(() => {
    animation?.kill()
})
</script>
