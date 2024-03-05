<script setup>
import Header from "./components/Header.vue";
</script>

<template>
	<div>
		<Header />
		<div class="flex flex-col items-center gap-5 mt-20 border-2 border-red-500 relative"
			style="overflow-x: hidden; overflow-y: hidden;">
			<!-- Added relative positioning to parent container -->
			<div class="text-center">
				<p class="font-playfair text-md uppercase tracking-wider">
					Let's Dive Into Deep
				</p>
				<h2 class="font-quick-delight text-9xl uppercase tracking-wide">
					Creativity
				</h2>
				<h3 class="font-quick-delight text-7xl uppercase tracking-wide leading-5">
					Isn't Just a Word
				</h3>
			</div>
			<div class="flex flex-col justify-center">
				<div class="relative flex items-start justify-center border-2 border-green-500">
					<img src="/src/assets/images/birds2.png" alt="bird" style="margin-left: -10%;" />
					<img src="/src/assets/images/line1.png" alt="line1" />

					<p class="flex flex-row items-center justify-center font-playfair font-bold text-xl text-nowrap w-20 gap-2 absolute top-1 text-center"
						style="margin-left: 20%;">
						Let’s start the tales
						<img src="/src/assets/images/mouse-icon.png" alt="mouse" />
					</p>
				</div>
				<div class="absolute w-[300px]" style="position: absolute; z-index: 20; right: 55px; top: 190px;">
					<p class="font-playfair text-sm leading-5 tracking-wide leading-6">
						It's a value deeply ingrained in every line of code, every pixel on
						the screen. Here, they crafted more than just services; they forged
						experiences that captivated hearts and minds, turning dreams into
						digital realities.
					</p>
				</div>
				<div class="relative bottom-40 z-10 border-2 border-blue-500">
					<img src="/src/assets/images/birds1.png" alt="bird"
						style="position: absolute; left: 5%; bottom: 70%;  z-index: 1; width: 13%;" />
					<img src="/src/assets/images/mountain.png" alt="" style="width: 100%;" />
					<img src="/src/assets/images/birds3.png" alt="bird"
						style="position: absolute; right: 5%; bottom: 70%;  z-index: 1; width: 13%;" />

				</div>
				<div class="relative bottom-40 z-10 border-2 border-green-500" style="margin-bottom: -5px;">
					<!-- Adjusted bottom margin -->
					<img src="/src/assets/images/ocean.png" alt="background" style="" />
					<div class="absolute inset-0 flex flex-col items-center justify-center"
						style="z-index: 20;margin-top: -145%;"> <!-- Positioned text absolutely and centered -->
						<p class="font-playfair text-xl uppercase tracking-wider text-white">
							The Tales of
						</p>
						<h2 class="font-quick-delight text-9xl uppercase tracking-wide text-white">
							Creativity
						</h2>
						<p class="font-playfair text-4xl leading-relaxed tracking-wide text-center text-white">
							<!-- Changed line height to leading-relaxed -->
							Their tale wasn't just about creating a splash in the<br>
							market. It was about creating ripples that transformed<br>
							communities.
						</p>
						<img src="/src/assets/images/line2.png" alt="Line 2"
							style="position: absolute; bottom: 1490px; right: 615px; z-index: 1;" />
						<img src="/src/assets/images/whale.png" alt="Whale"
							style="position: absolute; bottom: 1820px; right: -43px;z-index: 2; ">
						<div class="relative" style="bottom: -660px; right: -135px;">
							<button
								class="font-quick-delight border-2 border-white rounded text-white px-4 py-2 transition duration-300 hover:text-black hover:bg-white hover:border-white text-2xl">
								Enquire Now
							</button>
						</div>
					</div>
					<div class="absolute inset-0 flex flex-col items-center justify-center"
						style="z-index: 1;margin-top: 45%;">
						<p class="font-playfair text-xl uppercase tracking-wider text-white">
							it's about driving
						</p>
						<h2 class="font-quick-delight text-9xl uppercase tracking-wide text-white text-center ">
							Social
						</h2>
						<h2 class="font-quick-delight text-8xl uppercase tracking-wide text-white text-center">
							Economic
						</h2>
						<h2 class="font-quick-delight text-9xl uppercase tracking-wide text-white text-center ">
							Impact
						</h2>
						<h3 class="font-playfair text-4xl uppercase tracking-wider text-white text-center">
							It's not just<br>
							about profit<br>
							margins
						</h3>
						<img src="/src/assets/images/TV-left.png" alt="TV left"
							style="position: absolute; left: 2%; bottom: 40%;  z-index: 1;" />
						<img src="/src/assets/images/TV-right.png" alt="TV Right"
							style="position: absolute; right: 2%; bottom: 37%; z-index: 1;" />
						<img src="/src/assets/images/line3.png" alt="Line 3"
							style="position: absolute; bottom: 20%; right: 45.9%;" />
						<h3 class="font-playfair text-2sm wider text-white"
							style="position: absolute; bottom: 18.5%; right: 15%;">
							We're the architects who bring your ideas to life in the <br>
							digital realm. From concept to execution, watch as we <br>
							meticulously craft and mold your vision into a tangible, <br>
							thriving reality.
						</h3>
					</div>
					<div class="custom-shape-divider-bottom-1709625184">
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
							preserveAspectRatio="none">
							<path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
								class="shape-fill"></path>
						</svg>
					</div>

				</div>
				<div class="text-center" style="position: relative; bottom: 230px;z-index: 21;">
					<p class="font-playfair text-md uppercase tracking-wider">
						Your vision isn't just
					</p>
					<h2 class="font-quick-delight text-9xl uppercase tracking-wide">
						A dream
					</h2>
					<p class="font-playfair text-4xl leading-relaxed tracking-wide text-center text-black text-bold">
						<!-- Changed line height to leading-relaxed -->
						It's a Blueprint waiting to be<br>
						Realized
					</p>
					<img src="/src/assets/images/line4.png" alt="Line 4" style="position: absolute; right: 45.9%;"/>
					<div class="relative" style="bottom: -348px; right: -135px;z-index: 21;">
							<button
								class="font-quick-delight border-2 border-black rounded text-black px-4 py-2 transition duration-300 hover:text-white hover:bg-black hover:border-black text-2xl">
								Enquire Now
							</button>
						</div>
				</div>
				<div class="text-center" style="position: relative; bottom: -150px;z-index: 21;">
					<p class="font-playfair text-md uppercase tracking-wider">
						walks towards
					</p>
					<h2 class="font-quick-delight text-9xl uppercase tracking-wide">
						A Sustainable <br>
						World
					</h2>
					<p class="font-playfair text-4xl leading-relaxed tracking-wide text-center text-black text-bold text-center">
						<!-- Changed line height to leading-relaxed -->
						Realize sustainability through a<br>
						digital business card solution
					</p>
				</div>
				<img src="/src/assets/images/island.png" alt="Island" style="position: relative; bottom: -300px; z-index: 1;" />
				<img src="/src/assets/images/ocean2.png" alt="Ocean 2" style="position: relative; bottom: -150px; z-index: 2;"/>
				<img src="/src/assets/images/octopus.png" alt="Octopus" style="position: relative; bottom: 1590px; width: 48%; left: -50px;"/>
				<img src="/src/assets/images/birds4.png" alt="Birds 4" style="position: relative; bottom: 1900px; z-index: 2; width: 45%; left: 58.5%;"/>
				<img src="/src/assets/images/birds5.png" alt="Birds 5" style="position: relative; bottom: 2200px; z-index: 2; width: 25%; left: 35%;"/>
			</div>
		</div>
	</div>
</template>

<style>
.custom-shape-divider-bottom-1709625184 {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 105%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
}

.custom-shape-divider-bottom-1709625184 svg {
	position: relative;
	display: block;
	width: calc(100% + 46px);
	height: 130px;
}

.custom-shape-divider-bottom-1709625184 .shape-fill {
	fill: #FFFFFF;
}
</style>