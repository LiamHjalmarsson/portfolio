<script lang="ts" setup>
const text = `Got anye questions, want to come in contact or 
    have any need of help with any project
	i would love to hear from you`;
</script>

<template>
	<section id="contact" className="flex flex-col justify-between min-h-screen bg-black">
		<AnimatedHeaderSection title="Contact" subtitle="Let's Get in Touch" theme="light" :with-scroll-trigger="true">
			<AnimatedTextLines :text="text" class="font-light uppercase" />
		</AnimatedHeaderSection>
	</section>
</template>
