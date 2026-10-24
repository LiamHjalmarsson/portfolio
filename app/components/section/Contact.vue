<script lang="ts" setup>
import gsap from "gsap";

const text = `Tveka inte att höra av dig jag är alltid öppen för ett samtal eller ta en kopp kaffe.
Oavsett om det gäller samarbete eller något helt annat.`;

const buttonsWrapRef = ref<HTMLElement | null>(null);

const mailRef = ref<HTMLElement | null>(null);

const linkedInRef = ref<HTMLElement | null>(null);

let context: gsap.Context | null = null;

onMounted(async () => {
	await nextTick();

	const buttonsWrap = buttonsWrapRef.value;

	const mailWrap = mailRef.value;

	const linkedInWrap = linkedInRef.value;

	if (!buttonsWrap || !mailWrap || !linkedInWrap) return;

	context?.revert();

	context = gsap.context(() => {
		const items = [mailWrap, linkedInWrap];

		gsap.set(items, {
			autoAlpha: 0,
			y: 200,
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: buttonsWrap,
				start: "top 85%",
			},
		}).to(
			items,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.75,
				stagger: 0.3,
				ease: "power3.out",
				clearProps: "transform",
			},
			"<+.15",
		);
	}, buttonsWrap);
});

onBeforeUnmount(() => {
	context?.revert();

	context = null;
});
</script>

<template>
	<section id="contact" className="flex flex-col justify-between min-h-screen bg-black pb-16">
		<AnimatedHeaderSection
			title="Kontakta mig"
			subtitle="Ide, frågor eller bara säga hej"
			theme="light"
			:with-scroll-trigger="true">
			<AnimatedTextLines :text="text" class="font-light uppercase" />
		</AnimatedHeaderSection>

		<div class="flex-1 px-3 md:px-6 lg:px-12">
			<div ref="buttonsWrapRef" class="flex flex-col items-center justify-center space-y-6 lg:space-y-12 pt-12">
				<div ref="mailRef">
					<UiButton to="mailto:liam.hjalmarssons@gmail.com" label="Skicka mig ett mail" />
				</div>
				<div ref="linkedInRef">
					<UiButton to="https://www.linkedin.com/in/liamhjalmarsson/" label="Hitta mig på LinkedIn" />
				</div>
			</div>
		</div>
	</section>
</template>
