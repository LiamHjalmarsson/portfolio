<template>
    <section
        ref="sectionRef"
        class="flex flex-col justify-between pb-48 pt-48 overflow-hidden">
        <Header
            subtitle="Vad jag kan hjälpa med"
            title="Tjänster"
            theme="dark"
            :with-scroll-trigger="true" />

        <div class="w-full mt-48">
            <div
                ref="trackRef"
                class="flex will-change-transform">
                <div
                    v-for="service in services"
                    :key="service.title"
                    ref="slideRefs"
                    class="mx-auto w-screen flex justify-center items-center shrink-0">
                    <div class="flex p-10 max-w-210">
                        <div class="flex-1 space-y-8">
                            <h2 class="text-4xl lg:text-5xl">
                                {{ service.title }}
                            </h2>

                            <p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/80 text-pretty">
                                {{ service.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '~/constants/services'

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin)

const sectionRef = ref<HTMLElement | null>(null)

const trackRef = ref<HTMLDivElement | null>(null)

const slideRefs = ref<HTMLDivElement[]>([])

let animation: GSAPTimeline

let scrollAnimation: GSAPTween

let observer: Observer

let currentIndex = 0

let isSliding = false

function getScrollDistance() {
    const track = trackRef.value

    if (!track) {
        return 0
    }

    return Math.max(0, track.scrollWidth - track.clientWidth)
}

function getSnapPoints() {
    const distance = getScrollDistance()

    if (distance === 0) {
        return [0]
    }

    return slideRefs.value.map(slide => Math.min(slide.offsetLeft, distance) / distance)
}

function scrollWindowTo(y: number, duration: number, ease: string, onComplete?: () => void) {
    scrollAnimation?.kill()

    scrollAnimation = gsap.to(window, {
        scrollTo: {
            y,
            autoKill: false,
        },
        duration,
        ease,
        onComplete,
    })
}

function goToSlide(index: number) {
    const scrollTrigger = animation.scrollTrigger

    if (isSliding || !scrollTrigger) {
        return
    }

    if (index < 0 || index >= slideRefs.value.length) {
        observer.disable()

        scrollWindowTo(index < 0 ? scrollTrigger.start - 2 : scrollTrigger.end + 2, 0.15, 'none')

        return
    }

    const progress = getSnapPoints()[index] ?? 0

    isSliding = true

    scrollWindowTo(scrollTrigger.start + (scrollTrigger.end - scrollTrigger.start) * progress, 0.65, 'power2.out', () => {
        isSliding = false
    })
}

onMounted(() => {
    observer = Observer.create({
        target: sectionRef.value,
        type: 'wheel,touch,pointer',
        wheelSpeed: -1,
        tolerance: 6,
        preventDefault: true,
        allowClicks: true,
        onUp: () => goToSlide(currentIndex + 1),
        onDown: () => goToSlide(currentIndex - 1),
    })

    observer.disable()

    animation = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const snapPoints = getSnapPoints()

                currentIndex = snapPoints.indexOf(gsap.utils.snap(snapPoints, self.progress))
            },
            onToggle: (self) => {
                if (self.isActive) {
                    observer.enable()
                } else {
                    observer.disable()
                }
            },
        },
    })

    animation.to(trackRef.value, {
        x: () => -getScrollDistance(),
        ease: 'none',
    })

    ScrollTrigger.refresh()
})

onBeforeUnmount(() => {
    observer?.kill()

    scrollAnimation?.kill()

    animation?.kill()
})
</script>
