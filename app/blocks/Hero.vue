<template>
    <section
        id="home"
        class="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <div
            class="h-[30vh] lg:h-[55vh] flex flex-col max-xl:flex-1 w-full items-start xl:items-end xl:justify-end pt-24 md:pt-32 xl:pt-34 px-3 md:px-6 lg:px-12">
            <div
                ref="gridRootElement"
                class="grid max-lg:flex-1 min-h-0 w-full h-1/2 lg:h-130 2xl:h-162 xl:w-180 2xl:w-220 grid-cols-12 grid-rows-12 gap-3 overflow-hidden">
                <div
                    ref="leftCardRef"
                    class="col-span-6 sm:col-span-6 row-span-6 max-sm:row-span-12 sm:row-span-12 relative overflow-hidden rounded-2xl lg:rounded-4xl p-6">
                    <NuxtImg
                        src="/images/me.png"
                        format="webp"
                        preload
                        quality="80"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        loading="eager"
                        fetchpriority="high"
                        alt="Svartvit bild på Liam Hjalmarsson som står utomhus vid ett räcke med hav och klippor i bakgrunden och under en molnig himmel."
                        class="absolute inset-0 h-full w-full object-cover" />
                </div>

                <div
                    ref="socialsCardRef"
                    class="col-span-6 sm:col-span-6 row-span-2 sm:row-span-2 flex items-center justify-between overflow-hidden rounded-2xl lg:rounded-4xl bg-black p-3 text-white">
                    <NuxtLink
                        v-for="social in socials"
                        :key="social.name"
                        :to="social.href"
                        target="_blank"
                        :aria-label="`Besök ${social.name}`"
                        class="flex h-full items-center justify-center w-full">
                        <Icon :name="social.icon" size="36" />
                    </NuxtLink>
                </div>

                <div
                    ref="rotatingCardRef"
                    class="col-span-6 sm:col-span-6 row-span-6 max-sm:row-span-10 sm:row-span-10 relative overflow-hidden rounded-2xl lg:rounded-4xl">
                    <div
                        ref="currentImageRef"
                        class="absolute inset-0">
                        <NuxtImg
                            :src="rotatingImageSources[currentImageIndex]"
                            alt="Showcase image"
                            quality="80"
                            preload
                            format="webp"
                            class="h-full w-full object-cover" />
                    </div>

                    <div
                        ref="nextImageRef"
                        class="absolute inset-0">
                        <NuxtImg
                            :src="rotatingImageSources[nextImageIndex]"
                            alt="Next showcase image"
                            quality="80"
                            format="webp"
                            class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>

        <Header
            title="Liam Hjalmarsson"
            subtitle="Fullstack"
            theme="dark"
            :with-scroll-trigger="false">
            <TextLines
                :text="heroDescriptionText"
                class="font-light uppercase" />
        </Header>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { socials } from '~/constants/socials'

const heroDescriptionText = `Här utforskar jag kod, design och digitala lösningar.
Kika runt och hör av dig om du vill bygga något tillsammans,
eller bara ta en kopp kaffe och prata idéer.`

const rotatingImageSources = ['/images/nemo.png', '/images/murphy.png', '/images/nemo1.png']

const leftCardRef = ref<HTMLDivElement | null>(null)

const socialsCardRef = ref<HTMLDivElement | null>(null)

const rotatingCardRef = ref<HTMLDivElement | null>(null)

const currentImageRef = ref<HTMLDivElement | null>(null)

const nextImageRef = ref<HTMLDivElement | null>(null)

const currentImageIndex = ref(0)

const nextImageIndex = ref(1)

let animation: GSAPTimeline

let imageSwapTimeout: ReturnType<typeof setTimeout> | undefined

function scheduleImageSwap() {
    imageSwapTimeout = setTimeout(imageSwapAnimation, 5000)
}

const imageSwapAnimation = () => {
    animation?.kill()

    animation = gsap.timeline({
        onComplete: () => {
            currentImageIndex.value = nextImageIndex.value

            nextImageIndex.value = (nextImageIndex.value + 1) % rotatingImageSources.length

            nextTick(() => {
                gsap.set(currentImageRef.value, { opacity: 1 })

                gsap.set(nextImageRef.value, { opacity: 0 })

                scheduleImageSwap()
            })
        },
    })

    animation.to(currentImageRef.value, {
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
    })

    animation.to(nextImageRef.value, {
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
    }, '<')
}

onMounted(() => {
    animation = gsap.timeline()

    animation.fromTo([leftCardRef.value, socialsCardRef.value, rotatingCardRef.value], {
        opacity: 0,
        y: 200,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'circ.out',
        stagger: 0.15,
    })

    scheduleImageSwap()
})

onBeforeUnmount(() => {
    clearTimeout(imageSwapTimeout)

    animation?.kill()
})
</script>
