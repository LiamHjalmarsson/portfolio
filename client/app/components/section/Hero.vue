<script lang="ts" setup>
const aboutText = `Här utforskar jag kod, design och digitala idéer. 
Kika runt — och hör av dig om du vill bygga något tillsammans,
eller ta en kopp kaffe tillsammans.`;
</script>

<template>
	<section id="home" class="flex flex-col justify-end min-h-screen overflow-hidden relative">
		<AnimatedHeaderSection
			title="Liam Hjalmarsson"
			subtitle="Fullstack developer"
			theme="dark"
			:with-scroll-trigger="false">
			<AnimatedTextLines :text="aboutText" class="font-light uppercase value-text-responsive" />
		</AnimatedHeaderSection>
	</section>
</template>
