<script setup lang="ts"></script>

<template>
	<section class="flex flex-col justify-between min-h-screen pt-48">
		<AnimatedHeaderSection
			subtitle="Vad jag kan hjälpa med"
			title="Tjänster"
			theme="dark"
			:with-scroll-trigger="true" />

		<div class="space-y-48">
			<div class="mx-auto max-w-350">
				<div class="min-h-[20vh] flex overflow-hidden space-x-48">
					<div class="flex-1 space-y-8">
						<h2 class="text-4xl lg:text-5xl">Webb & applikationsutveckling</h2>
						<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
							Jag bygger moderna webbplatser och webbappar med fokus på struktur, prestanda och
							användarupplevelse — från idé till färdig produkt.
						</p>
					</div>
					<div class="flex-1 bg-orange-400">xx</div>
				</div>
			</div>

			<div class="mx-auto max-w-350">
				<div class="min-h-[20vh] flex overflow-hidden space-x-48">
					<div class="flex-1 space-y-8">
						<h2 class="text-4xl lg:text-5xl">Design & UX</h2>
						<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
							Jag hjälper till att forma tydliga gränssnitt och genomtänkta flöden — där funktion och
							estetik möts för att skapa upplevelser som känns enkla att använda.
						</p>
					</div>
					<div class="flex-1 bg-orange-400">xx</div>
				</div>
			</div>

			<div class="mx-auto max-w-350">
				<div class="min-h-[20vh] flex overflow-hidden space-x-48">
					<div class="flex-1 space-y-8">
						<h2 class="text-4xl lg:text-5xl">Struktur & vidareutveckling</h2>
						<p class="text-xl lg:text-2xl leading-relaxed tracking-widest text-black/60 text-pretty">
							Refaktorering, vidareutveckling och förbättring av befintliga projekt — med fokus på läsbar
							kod, hållbar arkitektur och långsiktig kvalitet.
						</p>
					</div>
					<div class="flex-1 bg-orange-400">xx</div>
				</div>
			</div>
		</div>
	</section>
</template>
