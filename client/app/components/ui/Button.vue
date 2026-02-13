<script setup lang="ts">
import gsap from "gsap";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonType = "button" | "submit" | "reset";

type UiButtonProps = {
	label: string;
	variant?: ButtonVariant;
	type?: ButtonType;
	to?: string;
};

const props = withDefaults(defineProps<UiButtonProps>(), {
	variant: "primary",
	type: "button",
});

const baseClass =
	"inline-flex items-center justify-center font-semibold text-lg transition-colors whitespace-nowrap select-none border-2 px-8 md:px-12 py-4 md:py-6 rounded-full";

const variantClass = computed<string>(() => {
	if (props.variant === "outline") {
		return "border-primary-600 text-primary-600 bg-transparent hover:bg-primary-700 hover:text-white active:bg-primary-200";
	}

	if (props.variant === "ghost") {
		return "text-primary-600 font-medium underline-offset-4 hover:underline px-0 py-0 border-transparent";
	}

	return "bg-primary-600 border-primary-600 text-white hover:bg-primary-700 active:bg-primary-800";
});

const rootRef = ref<HTMLElement | null>(null);

function animateTowardPointer(element: HTMLElement, offsetX: number, offsetY: number): void {
	const strengthDivisor = 10;

	gsap.to(element, {
		x: offsetX / strengthDivisor,
		y: offsetY / strengthDivisor,
		duration: 0.3,
		ease: "power3.out",
	});
}

function resetPosition(element: HTMLElement): void {
	gsap.to(element, {
		x: 0,
		y: 0,
		duration: 0.4,
		ease: "power3.out",
	});
}

function handlePointerMove(event: PointerEvent): void {
	const element = rootRef.value;

	if (!element) return;

	const rect = element.getBoundingClientRect();

	const offsetX = event.clientX - (rect.left + rect.width / 2);

	const offsetY = event.clientY - (rect.top + rect.height / 2);

	animateTowardPointer(element, offsetX, offsetY);
}

function handlePointerLeave(): void {
	const element = rootRef.value;
	if (!element) return;

	resetPosition(element);
}

onMounted(async () => {
	await nextTick();

	const element = rootRef.value;
	if (!element) return;

	element.addEventListener("pointermove", handlePointerMove);

	element.addEventListener("pointerleave", handlePointerLeave);
});

onBeforeUnmount(() => {
	const element = rootRef.value;

	if (element) {
		element.removeEventListener("pointermove", handlePointerMove);

		element.removeEventListener("pointerleave", handlePointerLeave);
	}
});
</script>

<template>
	<NuxtLink
		v-if="to"
		:to="to"
		:aria-label="label"
		:target="to.startsWith('http') ? '_blank' : undefined"
		:rel="to.startsWith('http') ? 'noopener noreferrer' : undefined"
		class="inline-flex">
		<span ref="rootRef" :class="[baseClass, variantClass]">
			<slot>{{ label }}</slot>
		</span>
	</NuxtLink>

	<button v-else :type="type" :aria-label="label" class="inline-flex">
		<span ref="rootRef" :class="[baseClass, variantClass]">
			<slot>{{ label }}</slot>
		</span>
	</button>
</template>
