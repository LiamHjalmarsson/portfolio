<script lang="ts" setup></script>

<template>
	<TresMesh cast-shadow>
		<TresTorusGeometry :args="[1, 0.5, 20, 64]" />

		<TresMeshBasicMaterial color="orange" />
	</TresMesh>

	<TresMesh receive-shadow :position="[0, 0, -4]">
		<TresPlaneGeometry :args="[400, 400, 10, 10]" />

		<TresMeshStandardMaterial color="#ffffff" :roughness="0.5" :metalness="0.5" />
	</TresMesh>

	<TresDirectionalLight cast-shadow :position="[-8, 6, 20]" :intensity="0.5" />

	<Suspense>
		<Environment files="/textures/lobby.hdr" :environment-intensity="0.5" />
	</Suspense>
</template>
