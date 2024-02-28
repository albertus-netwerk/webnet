<script setup>
import Header from "./components/Header.vue";
</script>

<template>
	<div class="">
		<Header />
		<div class="flex flex-col items-center gap-5 mt-20 border-2 border-red-500">
			<div class="text-center">
				<p class="font-playfair text-md uppercase tracking-wider">
					Let's Dive Into Deep
				</p>
				<h2 class="font-quick-delight text-8xl uppercase tracking-wide">
					Creativity
				</h2>
				<h3
					class="font-quick-delight text-6xl uppercase tracking-wide leading-5"
				>
					Isn't Just a Word
				</h3>
			</div>
			<div class="flex flex-col justify-center">
				<div
					class="relative flex items-start justify-center border-2 border-green-500"
				>
					<img src="/src/assets/images/line1.png" alt="line1" />
					<p
						class="flex flex-row items-center justify-center font-playfair font-bold text-sm text-nowrap w-20 gap-2 absolute top-1 left-24 ml-2"
					>
						Let’s start the tales
						<img src="/src/assets/images/mouse-icon.png" alt="mouse" />
					</p>
				</div>
				<div class="absolute right-10 bottom-44 w-[300px]">
					<p class="font-playfair text-sm leading-5 tracking-wide leading-6">
						It's a value deeply ingrained in every line of code, every pixel on
						the screen. Here, they crafted more than just services; they forged
						experiences that captivated hearts and minds, turning dreams into
						digital realities.
					</p>
				</div>
				<div class="relative bottom-48 z-10 border-2 border-blue-500">
					<img src="/src/assets/images/mountain.png" alt="" />
				</div>
				<!-- <div class="z-20">
					<img
						src="/src/assets/images/birds1.png"
						alt="birds1"
						class="absolute left-12 bottom-10 scale-75"
					/>
					<img
						src="/src/assets/images/birds2.png"
						alt="birds2"
						class="absolute bottom-24 scale-75 -translate-x-44"
					/>
					<img
						src="/src/assets/images/birds3.png"
						alt="birds3"
						class="absolute right-0 bottom-12"
					/>
				</div> -->
			</div>
		</div>
		<!-- <div class="flex flex-col items-center gap-5">
			<img src="/src/assets/images/ocean.png" alt="ocean" />
		</div> -->
	</div>
</template>
