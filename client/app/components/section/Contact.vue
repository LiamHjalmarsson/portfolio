<script lang="ts" setup>
const text = `Tveka inte att höra av dig jag är alltid öppen för ett samtal eller ta en kopp kaffe.
Oavsett om det gäller samarbete eller något helt annat.`;
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
			<div class="flex flex-col items-center justify-center space-y-6 pt-12">
				<UiButton label="Du kan skicka mig ett mail" />
				<UiButton label="Hitta mig på LinkeIn" />
			</div>
		</div>
	</section>
</template>
