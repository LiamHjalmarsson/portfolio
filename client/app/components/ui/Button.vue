<script setup lang="ts">
import gsap from "gsap";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonType = "button" | "submit" | "reset";

type AppButtonProps = {
	label: string;
	variant?: ButtonVariant;
	type?: ButtonType;
	to?: string;
};

const props = withDefaults(defineProps<AppButtonProps>(), {
	variant: "primary",
	type: "button",
});

const baseClassName =
	"inline-flex items-center justify-center font-semibold text-lg transition-colors whitespace-nowrap select-none border-2 px-12 py-6 relative rounded-full block cursor-pointer";

const variantClassName = computed((): string => {
	if (props.variant === "outline") {
		return "border-primary-600 text-primary-600 bg-transparent hover:bg-primary-700 hover:text-white active:bg-primary-200";
	}

	if (props.variant === "ghost") {
		return "text-primary-600 font-medium underline-offset-4 hover:underline px-0 py-0 border-transparent";
	}

	return "bg-primary-600 border-primary-600 text-white hover:bg-primary-700 active:bg-primary-800";
});

const buttonRootElement = ref<HTMLElement | null>(null);

let gsapContext: gsap.Context | null = null;

function animateButtonTowardPointer(buttonElement: HTMLElement, pointerOffsetX: number, pointerOffsetY: number): void {
	const strengthDivisor = 10;

	gsap.to(buttonElement, {
		x: pointerOffsetX / strengthDivisor,
		y: pointerOffsetY / strengthDivisor,
		duration: 0.3,
		ease: "power3.out",
	});
}

function resetButtonPosition(buttonElement: HTMLElement): void {
	gsap.to(buttonElement, {
		x: 0,
		y: 0,
		duration: 0.4,
		ease: "power3.out",
	});
}

function handlePointerMove(event: PointerEvent): void {
	const buttonElement = buttonRootElement.value;

	if (!buttonElement) return;

	const buttonRect = buttonElement.getBoundingClientRect();

	const pointerOffsetX = event.clientX - (buttonRect.left + buttonRect.width / 2);

	const pointerOffsetY = event.clientY - (buttonRect.top + buttonRect.height / 2);

	animateButtonTowardPointer(buttonElement, pointerOffsetX, pointerOffsetY);
}

function handlePointerLeave(): void {
	const buttonElement = buttonRootElement.value;

	if (!buttonElement) return;

	resetButtonPosition(buttonElement);
}

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	const buttonElement = buttonRootElement.value;

	if (!buttonElement) return;

	gsapContext = gsap.context(() => {
		buttonElement.addEventListener("pointermove", handlePointerMove);

		buttonElement.addEventListener("pointerleave", handlePointerLeave);
	}, buttonElement);
});

onBeforeUnmount(() => {
	const buttonElement = buttonRootElement.value;

	if (buttonElement) {
		buttonElement.removeEventListener("pointermove", handlePointerMove);

		buttonElement.removeEventListener("pointerleave", handlePointerLeave);
	}

	gsapContext?.revert();

	gsapContext = null;
});
</script>

<template>
	<NuxtLink v-if="to" ref="buttonRootElement" :to="to" :class="[baseClassName, variantClassName]">
		<slot>{{ label }}</slot>
	</NuxtLink>

	<button v-else ref="buttonRootElement" :type="type" :class="[baseClassName, variantClassName]">
		<slot>{{ label }}</slot>
	</button>
</template>
