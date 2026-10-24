<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

const sectionRootElement = ref<HTMLElement | null>(null);
const horizontalScrollContainerElement = ref<HTMLElement | null>(null);

let gsapContext: gsap.Context | undefined;

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	const rootElement = sectionRootElement.value;

	const containerElement = horizontalScrollContainerElement.value;

	if (!rootElement || !containerElement) return;

	gsapContext = gsap.context(() => {
		const slideElements = Array.from(containerElement.children).filter(
			(node): node is HTMLElement => node instanceof HTMLElement,
		);

		if (slideElements.length <= 1) return;

		function getMaxTranslateX(): number {
			return Math.max(0, containerElement.scrollWidth - containerElement.clientWidth);
		}

		function buildSnapPoints(): number[] {
			const maxTranslateX = getMaxTranslateX();
			if (maxTranslateX === 0) return [0];

			return slideElements.map((slideElement) => {
				const clampedLeft = Math.max(0, Math.min(slideElement.offsetLeft, maxTranslateX));
				return clampedLeft / maxTranslateX;
			});
		}

		function findClosestIndex(progress: number, snapPoints: number[]): number {
			let closestIndex = 0;
			let closestDistance = Math.abs(progress - (snapPoints[0] ?? 0));

			for (let i = 1; i < snapPoints.length; i += 1) {
				const point = snapPoints[i] ?? 0;
				const distance = Math.abs(progress - point);
				if (distance < closestDistance) {
					closestIndex = i;
					closestDistance = distance;
				}
			}

			return closestIndex;
		}

		function clampIndex(index: number): number {
			return Math.max(0, Math.min(index, slideElements.length - 1));
		}

		let isStepAnimating = false;
		let currentSlideIndex = 0;

		const horizontalTween = gsap.to(containerElement, {
			x: () => -getMaxTranslateX(),
			ease: "none",
		});

		const horizontalScrollTriggerInstance = ScrollTrigger.create({
			animation: horizontalTween,
			trigger: rootElement,
			start: "top top",
			end: () => `+=${getMaxTranslateX()}`,
			pin: true,
			scrub: 0.6,
			anticipatePin: 1,
			invalidateOnRefresh: true,
			onUpdate: (self) => {
				const snapPoints = buildSnapPoints();
				currentSlideIndex = findClosestIndex(self.progress, snapPoints);
			},
		});

		function scrollToSlideIndex(targetIndex: number): void {
			const snapPoints = buildSnapPoints();
			const clampedTargetIndex = clampIndex(targetIndex);

			const startScroll = horizontalScrollTriggerInstance.start;
			const endScroll = horizontalScrollTriggerInstance.end;

			const targetProgress = snapPoints[clampedTargetIndex] ?? 0;
			const targetScroll = startScroll + (endScroll - startScroll) * targetProgress;

			isStepAnimating = true;

			gsap.to(window, {
				scrollTo: { y: targetScroll, autoKill: false },
				duration: 0.65,
				ease: "power2.out",
				onComplete: () => {
					isStepAnimating = false;
				},
			});
		}

		// Observer is enabled ONLY while the pinned section is active.
		const scrollStepObserver = Observer.create({
			target: rootElement,
			type: "wheel,touch,pointer",
			preventDefault: true,
			allowClicks: true,

			// Lower = less scrolling needed for next/prev
			tolerance: 6,

			onDown: () => {
				if (isStepAnimating) return;

				const lastSlideIndex = slideElements.length - 1;

				// At the end: release control and continue normal scroll to next section
				if (currentSlideIndex >= lastSlideIndex) {
					scrollStepObserver.disable();

					// Nudge scroll past the ScrollTrigger end so the page continues normally
					gsap.to(window, {
						scrollTo: { y: horizontalScrollTriggerInstance.end + 2, autoKill: false },
						duration: 0.15,
						ease: "none",
					});

					return;
				}

				scrollToSlideIndex(currentSlideIndex + 1);
			},

			onUp: () => {
				if (isStepAnimating) return;

				// At the start: release control and allow normal scroll up to previous section
				if (currentSlideIndex <= 0) {
					scrollStepObserver.disable();

					gsap.to(window, {
						scrollTo: { y: horizontalScrollTriggerInstance.start - 2, autoKill: false },
						duration: 0.15,
						ease: "none",
					});

					return;
				}

				scrollToSlideIndex(currentSlideIndex - 1);
			},
		});

		// Disable by default; only enable when user is inside this pinned range
		scrollStepObserver.disable();

		ScrollTrigger.create({
			trigger: rootElement,
			start: () => horizontalScrollTriggerInstance.start,
			end: () => horizontalScrollTriggerInstance.end,
			onEnter: () => scrollStepObserver.enable(),
			onEnterBack: () => scrollStepObserver.enable(),
			onLeave: () => scrollStepObserver.disable(),
			onLeaveBack: () => scrollStepObserver.disable(),
		});

		ScrollTrigger.addEventListener("refreshInit", () => {
			gsap.set(containerElement, { x: 0 });
		});

		ScrollTrigger.refresh();

		return () => {
			scrollStepObserver.kill();
			horizontalScrollTriggerInstance.kill();
			horizontalTween.kill();
		};
	}, sectionRootElement);
});

onBeforeUnmount(() => {
	gsapContext?.revert();
});
</script>

<template>
	<section ref="sectionRootElement" class="flex flex-col justify-between pb-48 pt-48 overflow-hidden">
		<AnimatedHeaderSection
			subtitle="Vad jag kan hjälpa med"
			title="Tjänster"
			theme="dark"
			:with-scroll-trigger="true" />

		<div class="w-full mt-48">
			<div ref="horizontalScrollContainerElement" class="flex will-change-transform">
				<div class="mx-auto w-screen flex justify-center items-center shrink-0">
					<div class="flex p-10 max-w-210">
						<div class="flex-1 space-y-8">
							<h2 class="text-4xl lg:text-5xl">Webbsidor</h2>
							<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
								Jag bygger moderna webbplatser och webbappar med fokus på struktur, prestanda och
								användarupplevelse — från idé till färdig produkt.
							</p>
						</div>
					</div>
				</div>

				<div class="mx-auto w-screen flex justify-center items-center shrink-0">
					<div class="flex p-10 max-w-210">
						<div class="flex-1 space-y-8">
							<h2 class="text-4xl lg:text-5xl">Designsystem</h2>
							<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
								Komponentbaserade gränssnitt med konsekvent typografi, spacing och återanvändbara
								UI-delar.
							</p>
						</div>
					</div>
				</div>

				<div class="mx-auto w-screen flex justify-center items-center shrink-0">
					<div class="flex p-10 max-w-210">
						<div class="flex-1 space-y-8">
							<h2 class="text-4xl lg:text-5xl">Prestanda</h2>
							<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
								Snabba sidor med bra Core Web Vitals, optimerade bilder, caching och smart rendering.
							</p>
						</div>
					</div>
				</div>

				<div class="mx-auto w-screen flex justify-center items-center shrink-0">
					<div class="flex p-10 max-w-210">
						<div class="flex-1 space-y-8">
							<h2 class="text-4xl lg:text-5xl">CMS</h2>
							<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
								Strapi/Headless-upplägg där du kan uppdatera innehåll utan att röra koden.
							</p>
						</div>
					</div>
				</div>

				<div class="mx-auto w-screen flex justify-center items-center shrink-0">
					<div class="flex p-10 max-w-210">
						<div class="flex-1 space-y-8">
							<h2 class="text-4xl lg:text-5xl">Underhåll</h2>
							<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
								Löpande förbättringar, bugfixar och utveckling med fokus på stabilitet och kvalitet.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
