<script setup>
import Header from "./components/Header.vue";
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

// Define image sources for different screen sizes
const mediumScreenOceanSrc = "/assets/images/oceanmedium.png";
const defaultOceanSrc = "/assets/images/ocean.png";
const defaultLine2Src = "/assets/images/line2.png";
const mediumLine2Src = "/assets/images/line2medium.png";
const mediumTVLeftSrc = "/assets/images/tvleft.png"; // New source for medium screen
const mediumTVRightSrc = "/assets/images/tvright.png";
const mediumLine3Src = "/assets/images/line3medium.png";
const defaultLine3Src = "/assets/images/line3.png";
const mediumLine4Src = "/assets/images/line4medium.png";
const defaultLine4Src = "/assets/images/line4.png";
const defaultOcean2Src = "/assets/images/ocean2.png";
const mediumOcean2Src = "/assets/images/ocean2medium.png";
const mediumInstagramSrc = "/assets/images/instagramblack.png";
const defaultInstagramSrc = "/assets/images/instagram.png";
const mediumFacebookSrc = "/assets/images/facebookblack.png";
const defaultFacebookSrc = "/assets/images/facebook.png";
const mediumLinkedInSrc = "/assets/images/linkedInblack.png";
const defaultLinkedInSrc = "/assets/images/linkedIn.png";

// Reference to the image elements
const backgroundImage = ref("");
const lineImage = ref(null);
const tvLeftImage = ref(null);
const tvRightImage = ref(null);
const line3Image = ref(null);
const line4Image = ref(null);
const ocean2Image = ref(null);
const instagramImage = ref(null);
const facebookImage = ref(null);
const linkedInImage = ref(null);

// Function to update the image sources based on screen size
const updateImageSrc = () => {
  if (window.innerWidth < 1024) {
    // Medium screen (md)
    backgroundImage.value.src = mediumScreenOceanSrc;
    lineImage.value.src = mediumLine2Src;
    tvLeftImage.value.src = mediumTVLeftSrc;
    tvRightImage.value.src = mediumTVRightSrc;
    line3Image.value.src = mediumLine3Src;
    line4Image.value.src = mediumLine4Src;
    ocean2Image.value.src = mediumOcean2Src;
    instagramImage.value.src = mediumInstagramSrc;
    facebookImage.value.src = mediumFacebookSrc;
    linkedInImage.value.src = mediumLinkedInSrc;
  } else {
    // Default for large screen and above (lg, xl, etc.)
    backgroundImage.value.src = defaultOceanSrc;
    lineImage.value.src = defaultLine2Src;
    tvLeftImage.value.src = "/assets/images/TV-left.png";
    tvRightImage.value.src = "/assets/images/TV-right.png";
    line3Image.value.src = defaultLine3Src;
    line4Image.value.src = defaultLine4Src;
    ocean2Image.value.src = defaultOcean2Src;
    instagramImage.value.src = defaultInstagramSrc;
    facebookImage.value.src = defaultFacebookSrc;
    linkedInImage.value.src = defaultLinkedInSrc;
  }
};

// Call the updateImageSrc function initially and on window resize
onMounted(() => {
  updateImageSrc();
  window.addEventListener("resize", updateImageSrc);
});

// Cleanup event listener on component unmount
onUnmounted(() => {
  window.removeEventListener("resize", updateImageSrc);
});

const scaleImage = (imageId) => {
  const image = document.getElementById(imageId);
  if (image) {
    const currentScale = parseFloat(
      window.getComputedStyle(image).getPropertyValue("transform").split(",")[3]
    );
    const newScale = currentScale + 0.1;
    gsap.to(image, { duration: 0.3, scale: newScale });
  }
};

// Function to reset image scale on mouseleave
const resetImageScale = (imageId) => {
  const image = document.getElementById(imageId);
  if (image) {
    const currentScale = parseFloat(
      window.getComputedStyle(image).getPropertyValue("transform").split(",")[3]
    );
    gsap.to(image, { duration: 0.3, scale: currentScale });
  }
};
// Reactive variable to control button visibility
const showButton = ref(false);

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Show the button when user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 20 || document.documentElement.scrollTop > 20) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
});
</script>

//
<script>
// export default {
//   methods: {
//     togglePopup() {
//       console.log("Toggle menu clicked");
//       const popup = document.getElementById("toggleMenu");
//       if (!popup) {
//         console.error("Popup element not found");
//         return;
//       }

//       if (popup.classList.contains("hidden")) {
//         console.log("Popup is hidden, removing hidden class");
//         popup.classList.remove("hidden");
//       } else {
//         console.log("Popup is visible, adding hidden class");
//         popup.classList.add("hidden");
//       }
//     },
//   },
// };
//
</script>

<template>
  <div class="relative">
    <Header />
    <div
      class="flex flex-col items-center gap-5 mt-20 relative overflow-x-hidden overflow-y-hidden w-[100%]"
    >
      <!-- Added relative positioning to parent container -->
      <div class="text-center">
        <p
          class="font-playfair text-md md:text-2xl lg:text-2xl xl:text-2xl uppercase tracking-wider"
        >
          Let's Dive Into Deep
        </p>
        <h2
          class="font-quick-delight text-5xl md:text-8xl lg:text-9xl xl:text-9xl uppercase tracking-wide"
        >
          Creativity
        </h2>

        <h3
          class="font-quick-delight text-3xl md:text-7xl lg:text-8xl xl:text-8xl uppercase tracking-wide leading-5 md:mt-[-10px] lg:mt-[-20px]"
        >
          Isn't Just a Word
        </h3>
      </div>
      <div class="flex flex-col justify-center w-[100%]">
        <div class="relative flex items-start justify-center">
          <img
            class="ml-[-10%] mt-[34px] lg:mt-[20px] z-[30] w-[12%]"
            src="/src/assets/images/birds2.png"
            alt="bird"
          />
          <img
            class="opacity-0 md:opacity-0 lg:opacity-100 xl:opacity-100"
            src="/src/assets/images/line1.png"
            alt="line1"
          />

          <h1
            class="flex flex-row items-center justify-center font-playfair font-bold text-sm md:text-2xl lg:text-xl text-nowrap w-20 gap-2 absolute top-[0px] text-center ml-[2%] md:ml-[] lg:ml-[28%] xl:ml-[22%]"
          >
            Let’s start the tales
            <img src="/src/assets/images/mouse-icon.png" alt="mouse" />
          </h1>
        </div>
        <div
          class="absolute w-[300px] z-20 right-[55px] top-[225px] hidden md:hidden xl:block"
        >
          <p
            class="font-playfair text-[15px] leading-5 tracking-wide leading-6 w-[320px]"
          >
            It's a value deeply ingrained in every line of code, every pixel on the
            screen. Here, they crafted more than just services; they forged experiences
            that captivated hearts and minds, turning dreams into digital realities.
          </p>
        </div>
        <div class="relative bottom-40 z-10 w-[100%]">
          <img
            class="absolute left-[5px] md:left-[5%] xl:left-[5%] bottom-[190px] md:bottom-[70%] z-[100] w-[16%] md:w-[13%]"
            src="/src/assets/images/birds1.png"
            alt="bird1"
          />
          <img
            class="relative bottom-[40px] md:bottom-[40px] right-[20px] w-[100%] md:w-[100%] xl:w-[100%] transform scale-[150%] md:scale-[120%] xl:scale-110"
            src="/src/assets/images/mountain.png"
            alt="mountain"
          />
          <img
            class="absolute right-[2%] bottom-[87%] z-1 w-[13%] opacity-0 lg:opacity-100"
            src="/src/assets/images/birds3.png"
            alt="bird"
          />
        </div>
        <div
          class="relative top-[-300px] md:top-[-480px] lg:top-[-390px] xl:top-[-310px] z-10 mb-[-5px] items-center justify-center"
        >
          <!-- Adjusted bottom margin -->
          <img ref="backgroundImage" class="relative w-full" alt="background" />
          <div
            class="absolute inset-0 flex flex-col items-center justify-center z-20 mt-[-200%] md:mt-[-324%] lg:mt-[-145%] xl:mt-[-145%]"
          >
            <!-- Positioned text absolutely and centered -->
            <div class="flex flex-col items-center justify-center w-[100%] mt-[30px]">
              <p
                class="font-playfair text-sm md:text-3xl lg:text-2xl xl:text-2xl uppercase tracking-wider text-white mt-[-700px] md:mt-[-750px] lg:mt-[350px]"
              >
                The Tales of
              </p>
              <h2
                class="font-quick-delight text-6xl md:text-[110px] lg:text-9xl xl:text-9xl uppercase tracking-wide text-white"
              >
                Creativity
              </h2>
              <p
                class="font-playfair text-[24px] leading-[26px] md:text-4xl lg:text-4xl leading-relaxed tracking-wide text-center text-white mt-[-5px] md:mt-[0px] lg:mt-[-20px] md:w-[70%] lg:w-[90%]"
              >
                <!-- Changed line height to leading-relaxed -->
                Their tale wasn't just about<br class="block lg:hidden" />
                creating a splash in the<br />
                market. It was about creating<br class="block lg:hidden" />
                ripples that transformed<br />
                communities.
              </p>
            </div>
            <div
              class="flex flex-col justify-center items-center w-[100%] h-auto ml-[30px] mt-[30px]"
            >
              <div
                class="absolute mt-[-120px] md:mt-[-20px] lg:mt-[120px] xl:mt-[200px] left-[120px] md:left-[200px] lg:left-[300px] xl:left-[560px] w-[100%] z-[2] lg:scale-[0.7] xl:scale-[1]"
              >
                <img class="" src="/src/assets/images/whale.png" alt="Whale" />
              </div>
              <div class="button h-auto w-[100%] absolute left-[50%]">
                <img
                  ref="lineImage"
                  class="absolute z-[1] h-[390px] md:h-[900px] lg:h-[400px] xl:h-[650px] top-[-190px] lg:top-[20px]"
                  alt="Line 2"
                />
                <div
                  class="relative top-[200px] md:top-[724px] lg:top-[352px] xl:top-[572px] left-[-50%] lg:left-[30px] xl:left-[50px] w-full flex justify-center lg:justify-start"
                >
                  <button
                    class="md:scale-[1.5] lg:scale-[1] font-playfair font-bold border-2 border-white rounded text-white px-7 py-2 transition duration-300 hover:text-black hover:bg-white hover:border-white text-3xl"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center z-[1] mt-[350px] lg:mt-[550px] xl:mt-[45%]"
          >
            <p
              class="font-playfair text-sm md:text-3xl lg:text-2xl xl:text-2xl uppercase tracking-wider text-white"
            >
              it's about driving
            </p>
            <h2
              class="font-quick-delight text-7xl md:text-9xl lg:text-[120px] xl:text-9xl uppercase tracking-wide text-white text-center"
            >
              Social
            </h2>
            <h2
              class="font-quick-delight text-5xl md:text-9xl lg:text-[83px] uppercase tracking-wide text-white text-center mt-[-15px] lg:mt-[-10px] xl:mt-[-24px]"
            >
              Economic
            </h2>
            <h2
              class="font-quick-delight text-7xl md:text-9xl lg:text-[120px] uppercase tracking-wide text-white text-center mt-[-14px] lg:mt-[-10px] xl:mt-[-24px]"
            >
              Impact
            </h2>
            <h3
              class="font-playfair text-3xl md:text-5xl lg:text-[33px] uppercase tracking-wider text-white text-center"
            >
              It's not just<br />
              about profit<br />
              margins
            </h3>
            <img
              ref="tvLeftImage"
              class="absolute left-[12%] md:left-[30%] lg:left-[-3%] xl:left-[2%] lg:left-[-30px] bottom-[30%] md:bottom-[34%] lg:bottom-[34%] z-99 scale-[1] md:scale-[2.2] lg:scale-[0.74] xl:scale-[1]"
              alt="TV left"
              id="toggleMenu"
              @click="togglePopup"
            />

            <div
              id="popup2"
              class="w-[100%] h-[800px] relative bg-slate-950 popup-menu justify-center items-center flex z-[999] hidden"
            >
              <div class="w-[100%] h-[800px] relative bg-slate-950">
                <div class="popup-content flex justify-center items-center mt-[50px]">
                  <img
                    class="w-[347px] h-[359px] left-[px] top-[42px] mx-[22px] rounded-[9px]"
                    src="/src/assets/images/photo1.png"
                  />
                  <img
                    class="w-[347px] h-[359px] left-[px] top-[42px] mx-[22px] rounded-[9px]"
                    src="/src/assets/images/photo2.png"
                  />
                  <img
                    class="w-[347px] h-[359px] left-[px] top-[42px] mx-[22px] rounded-[9px]"
                    src="/src/assets/images/photo3.png"
                  />
                  <img
                    class="absolute right-[50px] top-[42px]"
                    src="/src/assets/images/closeicon2.png"
                  />
                </div>
                <div class="popup-content flex justify-center items-center mt-[50px]">
                  <img
                    class="w-[474px] h-[309px] mx-[22px] rounded-[9px]"
                    src="/src/assets/images/photo4.png"
                  />
                  <div
                    class="w-[220px] h-[309px] mx-[22px] bg-red-600 rounded-[9px] flex justify-center items-center flex-col"
                  >
                    <h1
                      class="text-center text-white text-[54px] font-bold font-playfair tracking-[-3px]"
                    >
                      ILUNA
                    </h1>
                    <h2
                      class="text-center text-white text-[15px] font-semibold font-playfair tracking-wide mt-[-20px]"
                    >
                      Dari Kami untuk Kami
                    </h2>
                  </div>
                  <img
                    class="w-[347px] h-[309px] mx-[22px] rounded-[9px]"
                    src="/src/assets/images/photo5.png"
                  />
                </div>
              </div>
            </div>

            <img
              id="tvRightImageScale"
              ref="tvRightImage"
              class="absolute right-[12%] md:right-[35%] lg:right-[15px] xl:right-[3%] bottom-[21%] md:bottom-[22%] lg:bottom-[31%] z-1 scale-[0.9] md:scale-[2.2] lg:scale-[0.8] xl:scale-[1]"
              alt="TV Right"
              @mouseover="scaleImage('tvRightImageScale')"
              @mouseleave="resetImageScale('tvRightImageScale')"
            />

            <img
              ref="line3Image"
              class="absolute bottom-[12.5%] md:bottom-[13.4%] lg:bottom-[15.5%] xl:bottom-[20%] right-[50%] lg:right-[45.9%] xl:right-[45.9%] scale-[0.9] md:scale-[1.75] lg:scale-[0.6] xl:scale-[1]"
              alt="Line 3"
            />
            <h3
              class="font-playfair text-2sm wider text-white absolute bottom-[18.5%] right-[5%] xl:right-[15%] opacity-0 lg:opacity-100"
            >
              We're the architects who bring your ideas to life in the <br />
              digital realm. From concept to execution, watch as we <br />
              meticulously craft and mold your vision into a tangible, <br />
              thriving reality.
            </h3>
          </div>
          <div
            class="custom-shape-divider-bottom-1709625184 absolute lg:bottom-[0px] lg:left-[0px] lg:w-[105%]"
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div class="relative z-20 text-center bottom-[230px]">
          <p
            class="font-playfair text-sm md:text-3xl lg:text-2xl xl:text-2xl uppercase tracking-wider"
          >
            Your vision isn't just
          </p>
          <h2
            class="font-quick-delight text-7xl md:text-9xl lg:text-[140px] xl:text-9xl uppercase tracking-wide"
          >
            A dream
          </h2>
          <p
            class="font-playfair text-2xl md:text-5xl lg:text-[37px] tracking-wide text-center text-black text-bold w-[75%] lg:w-[50%] ml-[12.5%] lg:ml-[25%] lg:mt-[-20px]"
          >
            <!-- Changed line height to leading-relaxed -->
            It's a Blueprint waiting to be Realized
          </p>
          <img
            ref="line4Image"
            class="absolute right-[50%] lg:right-[45.9%] bottom-[-180px] md:bottom-[-240px] lg:bottom-[-360px] xl:botttom-auto md:scale-[1.5] lg:scale-[1]"
            alt="Line 4"
          />
          <div
            class="relative bottom-[-235px] md:bottom-[-359px] lg:bottom-[-370px] right-[0px] lg:right-[-160px] xl:right-[-175px] z-20 md:scale-[1.5] lg:scale-[1]"
          >
            <button
              class="font-playfair font-bold border-2 border-black rounded text-black px-7 py-2 transition duration-300 hover:text-white hover:bg-black hover:border-black text-3xl"
            >
              Enquire Now
            </button>
          </div>
        </div>
        <div class="relative text-center bottom-[-200px] md:bottom-[-300px] z-[21]">
          <p
            class="font-playfair text-sm md:text-3xl lg:text-2xl xl:text-2xl uppercase tracking-wider"
          >
            walks towards
          </p>
          <h2
            class="font-quick-delight text-4xl md:text-7xl lg:text-[140px] xl:text-[100px] uppercase tracking-wide mt-[px]"
          >
            A Sustainable
          </h2>
          <h2
            class="font-quick-delight text-7xl md:text-[150px] lg:text-[140px] xl:text-9xl uppercase tracking-wide mt-[-10px] lg:mt-[-20px]"
          >
            World
          </h2>
          <p
            class="font-playfair text-2xl md:text-5xl lg:text-[37px] leading-relaxed tracking-wide text-center text-black text-bold text-center mt-[0px] w-[75%] xl:w-[42%] ml-[12.5%] xl:ml-[29%]"
          >
            Realize sustainability through a digital business card solution
          </p>

          <img
            class="relative bottom-[-130px] xl:bottom-[-200px] scale-[2] lg:scale-[1]"
            src="/src/assets/images/island.png"
            alt="Island"
          />
          <img
            class="absolute z-[2] top-[-20px] md:top-[50px] lg:top-[20px] xl:top-[18px] left-[-40px] md:left-[0px] lg:left-[35px] xl:left-[300px] scale-[0.6] md:scale-[1] lg:scale-[1]"
            src="/src/assets/images/birds6.png"
            alt="bird 6"
          />
          <img
            class="absolute top-[425px] left-[560px] opacity-0 lg:opacity-100"
            src="/src/assets/images/birds5.png"
            alt="bird 5"
          />
          <img
            class="absolute top-[450px] right-[10px] opacity-0 lg:opacity-100"
            src="/src/assets/images/birds4.png"
            alt="bird 4"
          />
          <!-- <img src="/src/assets/images/octopus.png" alt="octopus 1"
						style="position: absolute; top: 340px; left: -100px; z-index: -1;" /> -->
        </div>
        <div class="items-center mt-[200px] md:mt-[275px] xl:mt-[240px] lg:mt-[220px]">
          <img
            class="relative top-[90px] z-[22] w-[110%] lg:w-auto"
            ref="ocean2Image"
            alt="Ocean 2"
          />
          <div
            class="relative z-[24] top-[-350px] md:top-[-805px] lg:top-[-600px] xl:top-[-860px] text-center"
          >
            <p
              class="font-playfair text-[15px] md:text-3xl lg:text-2xl xl:text-2xl uppercase tracking-wider"
              style="top: px"
            >
              The Legends of
            </p>
            <h2
              class="font-quick-delight text-6xl md:text-9xl lg:text-[100px] xl:text-9xl uppercase tracking-wide"
            >
              Folklores
            </h2>
            <div
              class="flex flex-col lg:flex-row justify-center items-center w-full absolute mt-[-40px] lg:mt-[-55px] xl:mt-[-50px]"
            >
              <div
                class="container flex flex-col items-center scale-[1.1] md:scale-[1.8] lg:scale-[0.8] xl:scale-[1]"
              >
                <img src="/src/assets/images/rectangle1.png" alt="Rectangle 1" />
                <div class="flex justify-center w-full relative bottom-[-60px] z-2">
                  <div
                    class="flex justify-center items-center w-[305px] h-[200px] bg-black mx-[px] box-hover"
                    style=""
                  >
                    <div
                      class="hover-div h-[200px] w-[305px] bg-black relative justify-center items-center z-[3]"
                    >
                      <img
                        src="/src/assets/images/boxline.png"
                        style="z-index: 4; width: 355px; top: 0%"
                      />
                      <div class="text-container top-[57px]">
                        <p class="font-playfair text-md uppercase tracking-wider">
                          Bank OCBC
                        </p>
                        <h2 class="font-playfair text-2xl font-bold" style="">
                          Tumbuhkan assets <br />mulai dari OneApp
                        </h2>
                      </div>
                    </div>

                    <img
                      class=""
                      src="/src/assets/images/barcode.png"
                      alt="Barcode"
                      style="position: absolute; bottom: 4%; width: 20%"
                    />
                  </div>
                </div>
                <div class="absolute bottom-[10px] box-text">
                  <h2 class="font-playfair text-sm text-white">
                    Hadir untuk menemani perjalanan<br />
                    investasimu menuju kemapanan<br />
                    finansial.
                  </h2>
                </div>
              </div>
              <div
                class="container flex flex-col items-center scale-[1.1] md:scale-[1.8] lg:scale-[0.8] xl:scale-[1]"
              >
                <img src="/src/assets/images/rectangle3.png" alt="Rectangle 3" />
                <div class="flex justify-center w-full relative bottom-[-60px] z-2">
                  <div
                    class="flex justify-center items-center w-[305px] h-[200px] bg-black mx-[px] box-hover"
                  >
                    <div
                      class="hover-div h-[200px] w-[305px] bg-black relative justify-center items-center z-[3]"
                    >
                      <img
                        src="/src/assets/images/boxline.png"
                        style="z-index: 4; width: 355px; top: 0%"
                      />
                      <div
                        class="text-container w-[305px] top-[57px] justify-center items-center"
                      >
                        <p class="font-playfair text-md uppercase tracking-wider">
                          Friederichherman
                        </p>
                        <h2
                          class="font-playfair text-2xl font-bold leading-[23px]"
                          style=""
                        >
                          Personal reflection on <br />
                          a real woman's life <br />innovative silhouettes
                        </h2>
                      </div>
                    </div>

                    <img
                      class="z-[4]"
                      src="/src/assets/images/barcode.png"
                      alt="Barcode"
                      style="position: absolute; bottom: 4%; width: 20%"
                    />
                  </div>
                </div>
                <div class="absolute bottom-[10px] box-text">
                  <h2 class="font-playfair text-sm text-white">
                    Contemporary fashion brand that<br />
                    serves customers with serenely<br />
                    confident.
                  </h2>
                </div>
              </div>
              <div
                class="container flex flex-col items-center scale-[1.1] md:scale-[1.8] lg:scale-[0.8] xl:scale-[1]"
              >
                <img src="/src/assets/images/rectangle2.png" alt="Rectangle 2" />
                <div class="flex justify-center w-full relative bottom-[-60px] z-2">
                  <div
                    class="flex justify-center items-center w-[305px] h-[200px] bg-black mx-[px] box-hover"
                    style=""
                  >
                    <div
                      class="hover-div h-[200px] w-[305px] bg-black relative justify-center items-center z-[3]"
                    >
                      <img
                        src="/src/assets/images/boxline.png"
                        style="z-index: 4; width: 355px; top: 0%"
                      />
                      <div class="text-container top-[57px]">
                        <p class="font-playfair text-md uppercase tracking-wider">
                          Watereri
                        </p>
                        <h2 class="font-playfair text-2xl font-bold" style="">
                          All-day germs, <br />bacteria and virus free
                        </h2>
                      </div>
                    </div>
                    <img
                      src="/src/assets/images/barcode.png"
                      alt="Barcode"
                      style="position: absolute; bottom: 4%; width: 20%"
                    />
                  </div>
                </div>
                <div class="absolute bottom-[10px] box-text">
                  <h2 class="font-playfair text-sm text-white">
                    It’s only a little thing in the<br />
                    bottles, but it will help you<br />
                    #staysafewithwatereri
                  </h2>
                </div>
              </div>
              <!-- <img src="/src/assets/images/octopus2.png" alt="Octopus 2"
								style="position: absolute; bottom: -240px; right: 109px;" /> -->
              <div class="custom-shape-divider-bottom-1709889332">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                    class="shape-fill"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-center flex-col mt-[1650px] md:mt-[2500px] lg:mt-[150px]"
        >
          <!-- <img src="/src/assets/images/octopus3.png" /> -->
          <div style="height: 70px"></div>
          <p
            class="font-playfair text-sm md:text-[24px] lg:text-2xl xl:text-2xl uppercase tracking-wider"
          >
            unlocking digital excellence with
          </p>
          <p>
            <span
              class="font-quick-delight text-[34px] md:text-[57px] lg:text-7xl relative top-[-20px] lg:top-[-49px]"
              >the</span
            ><span class="font-quick-delight text-[55px] md:text-[90px] lg:text-9xl"
              >TECHNO</span
            >
            <span
              class="font-quick-delight text-[55px] md:text-[90px] lg:text-9xl"
              style="color: #0d6c54"
              >WERK</span
            >
          </p>
          <div
            class="relative flex flex-col lg:flex-row mt-[0px] lg:scale-[0.9] xl:scale-[1] z-10"
          >
            <!-- First Column -->
            <div class="flex-[1] mr-[40px]">
              <div
                class="w-[288px] h-[450px] flex-col justify-center items-center inline-flex ml-[76px] scale-[1.23] md:scale-[1.9] lg:scale-[1] mt-[70px] md:mt-[200px] lg:mt-[0px]"
              >
                <div class="w-[288px] h-[450px] relative">
                  <div class="ipo-content">
                    <!-- IPO Content -->
                    <div class="ipo-text" style="">
                      <span style="font-size: 32px; font-weight: 600; line-height: 64px"
                        >the<br
                      /></span>
                      <span style="font-size: 96px; font-weight: 600; line-height: 34px"
                        >IPO<br
                      /></span>
                      <span
                        style="
                          font-size: 20px;
                          font-weight: 400;
                          line-height: 45px;
                          letter-spacing: 2px;
                        "
                        >Upscale your<br
                      /></span>
                      <span
                        style="
                          font-size: 20px;
                          font-weight: 400;
                          line-height: 0px;
                          letter-spacing: 2px;
                        "
                        >business and Seeking<br />fundraising</span
                      >
                    </div>
                    <div
                      class="ipo-button-container"
                      style="
                        width: 230px;
                        font-size: 20px;
                        height: 34px;
                        padding-left: 30px;
                        padding-right: 30px;
                        left: 26px;
                        top: 348px;
                        position: absolute;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        display: inline-flex;
                      "
                    >
                      <button class="ipo-button">Download</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card w-[288px] h-[260px] relative top-[45px] ml-[76px] scale-[1.23] md:scale-[1.9] lg:scale-[1] mt-[60px] md:mt-[320px] lg:mt-[0px]"
                style=""
              >
                <div class="card-content">
                  <!-- Card Content -->
                </div>
                <img
                  style="
                    width: 224px;
                    height: 137px;
                    left: 32px;
                    top: 62px;
                    position: absolute;
                  "
                  src="/src/assets/images/card.png"
                />
              </div>
            </div>

            <!-- Second Column -->
            <div style="flex: 1; margin: 0 20px">
              <!-- Second column code goes here -->
              <div
                class="Tag-container w-[400px] h-[291px] relative scale-[0.9] md:scale-[1.36] lg:scale-[1] mt-[90px] md:mt-[270px] lg:mt-[0px]"
                style="
                  width: 400px;
                  height: 291px;
                  position: relative;
                  border-radius: 9px;
                  overflow: hidden;
                "
              >
                <div
                  class="Tag-inner w-[687px] h-[454px] left-[-132px] top-[-53px] absolute"
                >
                  <div
                    class="Tag-background w-[400px] h-[291px] left-[132px] top-[53px] absolute"
                    style=""
                  ></div>
                  <div
                    class="Tag-overlay w-[234px] h-[234px] left-[0px] top-[0px] absolute"
                    style=""
                  ></div>
                  <div
                    class="Tag-text left-[295px] top-[182px] absolute"
                    style="
                      color: white;
                      font-size: 48px;
                      font-family: Playfair Display;
                      font-weight: 400;
                      line-height: 48px;
                      letter-spacing: 4.8px;
                      word-wrap: break-word;
                    "
                  >
                    TAG
                  </div>
                  <div
                    class="Tag-image w-[55px] h-[42.93px] left-[225px] top-[178px] absolute"
                  >
                    <div
                      class="Tag-image-block w-[45.61px] h-[32.2px] left-[9.39px] top-[10.73px] absolute"
                      style="background: white; border-radius: 3px"
                    ></div>
                    <div
                      class="Tag-image-block w-[45.61px] h-[32.2px] left-[0] top-[0] absolute"
                      style="background: white; border-radius: 3px"
                    ></div>
                    <div
                      class="Tag-image-icon w-[36.22px] h-[21.46px] left-[9.39px] top-[10.73px] absolute"
                      style="background: #d9d9d9; border-radius: 3px"
                    ></div>
                  </div>
                  <div
                    class="Tag-website left-[286px] top-[305px] absolute text-center"
                    style="
                      color: white;
                      font-size: 10px;
                      font-family: Roboto Flex;
                      font-weight: 300;
                      text-transform: uppercase;
                      letter-spacing: 2px;
                      word-wrap: break-word;
                    "
                  >
                    www.tagid.ai
                  </div>
                  <div
                    class="Tag-shadow"
                    style="
                      width: 276px;
                      height: 276px;
                      left: 411px;
                      top: 178px;
                      position: absolute;
                      opacity: 0.95;
                      background: #284184;
                      box-shadow: 101px 101px 101px;
                      border-radius: 9999px;
                      filter: blur(70px);
                    "
                  ></div>
                </div>
              </div>

              <div
                class="beonco w-[400px] h-[419px] mt-[-5px] md:mt-[180px] lg:mt-[50px] relative scale-[0.9] md:scale-[1.36] lg:scale-[1]"
                style=""
              >
                <div class="beonco-content"></div>
                <img
                  src="/src/assets/images/letterb.png"
                  style="
                    width: 81px;
                    height: 85px;
                    left: 160px;
                    top: 167px;
                    position: absolute;
                  "
                />
                <div
                  style="
                    left: 139px;
                    top: 377px;
                    position: absolute;
                    color: white;
                    font-size: 10px;
                    font-family: Roboto Flex;
                    font-weight: 300;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    word-wrap: break-word;
                  "
                >
                  www.beonco.com
                </div>
              </div>
            </div>
            <!-- Third Column -->
            <div style="flex: 1; position: relative; z-index: 10">
              <div
                class="tagidAIContainer ml-[76px] lg:ml-[40px] w-[288px] h-[471px] relative scale-[1.25] md:scale-[1.9] lg:scale-[1] mt-[75px] md:mt-[340px] lg:mt-[0px]"
                style="overflow-y: hidden;"
              >
                <div class="w-[288px] h-[471px] absolute left-[0px] top-[0px] tagidBackground"
                  style="
                    
                  "
                ></div>
                <div
                  style="
                    width: 223px;
                    height: 325px;
                    position: absolute;
                    left: 33px;
                    top: 146px;
                  "
                >
                  <img class="tagidPhone"
                    style="width: 220px; height: 319px; position: absolute; top: 6px"
                    src="/src/assets/images/phone.png"
                  />
                </div>
                <div
                  style="
                    position: absolute;
                    left: 55px;
                    top: 94px;
                    color: white;
                    font-size: 15px;
                    font-family: Roboto Flex;
                    font-weight: 300;
                    letter-spacing: 3px;
                    word-wrap: break-word;
                  "
                >
                <h2 class="uppercase">Savvy Marketing <br />Tool for brands</h2>
                  

                  <h2 class=" text-[12px] mt-[30px]">
                  Tag ID merupakan virtual business card yang membantu tingkatkan<br/> traffic & penjualan, serta terintegrasi dengan e-commerce Anda.
                  </h2>
                  <button>
                  </button>
                  <button>
                  </button>
                </div>
                <div>

                </div>
                <div
                  style="
                    position: absolute;
                    left: 75px;
                    top: 33px;
                    color: white;
                    font-size: 10px;
                    font-family: Roboto Flex;
                    font-weight: 300;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    word-wrap: break-word;
                    text-align: center;
                  "
                >
                  www.tagid.ai
                </div>
                <div
                  style="
                    width: 34px;
                    height: 34px;
                    position: absolute;
                    left: 33px;
                    top: 22px;
                    background: white;
                    border-radius: 9999px;
                  "
                ></div>
                <img
                  style="
                    width: 24px;
                    height: 22px;
                    position: absolute;
                    left: 37px;
                    top: 28px;
                  "
                  src="/src/assets/images/logo.png"
                />
              </div>
              <div
                class="ml-[84px] md:ml-[106px] lg:ml-[40px] w-[355px] h-[578px] relative mt-[480px] md:mt-[1030px] lg:mt-[50px] scale-[1.25] md:scale-[1.9] lg:scale-[1] justify-center items-center z-[30]"
                style=""
              >
                <div
                  style="
                    width: 288px;
                    height: 578px;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    background: #f2f2f2;
                    border-radius: 9px;
                  "
                ></div>
                <img
                  class="w-[350px] lg:w-[355px]"
                  style="height: 529px; position: absolute; left: -40px; top: 49px"
                  src="/src/assets/images/beoncopeople.png"
                />
                <div
                  style="
                    width: 164px;
                    height: 34px;
                    position: absolute;
                    left: 47px;
                    top: 26px;
                  "
                >
                  <div
                    style="
                      position: absolute;
                      left: 42px;
                      top: 11px;
                      color: black;
                      font-size: 10px;
                      font-family: Roboto Flex;
                      font-weight: 300;
                      text-transform: uppercase;
                      letter-spacing: 2px;
                      word-wrap: break-word;
                    "
                  >
                    www.beonco.com
                  </div>
                  <div
                    style="
                      width: 34px;
                      height: 34px;
                      position: absolute;
                      left: 0px;
                      top: 0px;
                    "
                  >
                    <div
                      style="
                        width: 34px;
                        height: 34px;
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        background: white;
                        border-radius: 9999px;
                      "
                    ></div>
                    <div
                      style="
                        width: 17px;
                        height: 18px;
                        position: absolute;
                        left: 9px;
                        top: 8px;
                        background: #b22222;
                      "
                    ></div>
                  </div>
                </div>
                <div
                  style="
                    position: absolute;
                    left: 83px;
                    top: 191px;
                    width: 209px;
                    opacity: 0;
                    color: white;
                    font-size: 20px;
                    font-family: Playfair Display;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 2px;
                    word-wrap: break-word;
                  "
                >
                  Dapatkan lebih banyak dari yang Anda investasikan.
                </div>
              </div>
            </div>
          </div>
          <div
            class="theOutsource w-[355px] lg:w-[736px] h-[291px] relative right-[215px] lg:right-[150px] xl:right-[175px] bottom-[970px] md:bottom-[1260px] lg:bottom-[335px] xl:bottom-[290px] lg:scale-[0.9] xl:scale-[1]"
          >
            <div
              class=" w-[355px] lg:w-[736px] h-[291px] left-[214px] md:left-[205px] lg:left-[0px] top-[0px] absolute md:scale-[1.55] lg:scale-[1] outsource-Container"
              style=""
            ></div>
            <div
              class="w-[92px] h-[126.81px] left-[320px] lg:left-[93px] top-[15px] lg:top-[82px] absolute"
            >
              <img
                class="head2 w-[93.24px] h-[110.65px] left-[-1.24px] top-[16.16px] absolute scale-[1.2] lg:scale-[1]"
                src="/src/assets/images/outource2.png"
              />
            </div>
            <div
              class="w-[91.23px] h-[125.75px] left-[370px] lg:left-[142.77px] top-[20px] lg:top-[83px] absolute"
            >
              <div class="w-[91.23px] h-[125.75px] left-[-90px] top-[0px] absolute">
                <img
                  class="w-[91.23px] h-[122.06px] left-[91.23px] top-[3.70px] absolute scale-[1.1] lg:scale-[1]"
                  src="/src/assets/images/outsource1.png"
                />
              </div>
            </div>
            <div
              class="w-[381px] h-[69px] left-[250px] lg:left-[262px] top-[150px] lg:top-[111px] absolute"
            >
              <div
                class="outsource-text left-[0px] top-[0px] absolute text-black text-[50px] lg:text-[64px] font-quick-delight font-400 leading-[64px]"
              >
                the Outsource.
              </div>
              <div
                class="outsource-text left-0 top-[56px] absolute text-black text-[15px] lg:text-[20px] font-playfair font-400 leading-[23px] tracking-[2px] w-[700px]"
              >
                We capture the best talent on earth
              </div>
            </div>
          </div>
          <div class="h-[0px] lg:h-[420px]" style=""></div>
        </div>
      </div>
      <div
        class="relative items-center justify-center z-20 mt-[-30px] lg:mt-0 w-[1300px] lg:w-full"
      >
        <img
          class="w-[1300px] lg:w-full h-[1050px] lg:h-[668px]"
          src="/src/assets/images/footer.png"
        />
        <div
          class="absolute top-[35%] lg:top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col"
        >
          <p
            class="font-playfair text-white text-[15px] md:text-[23px] lg:text-[18px] xl:text-[20px] font-[400] leading-20 text-center w-[40%] md:w-[60%] lg:w-[100%] ml-[30%] md:ml-[20%] lg:ml-[0%] mt-[-120px] md:mt-[-20px] lg:mt-[0]"
          >
            The first Outsource you'll love. And the last one you'll ever need.
          </p>
          <p
            class="font-quick-delight text-center text-white text-[40px] md:text-[60px] lg:text-[55px] xl:text-[64px] font-[400] leading-[40px] md:leading-[55px] mt-[20px] w-[44%] md:w-[66%] lg:w-[800px] xl:w-[862px] ml-[28%] md:ml-[16%] lg:ml-[0%]"
          >
            See where the Netwerk can take your business to next level.
          </p>
        </div>
        <img
          class="z-[21] absolute top-[52%] md:top-[59%] lg:top-[60%] xl:top-[60.7%] left-[40.8%] lg:left-[42%] xl:left-[40.8%] transform -translate-x-1/2 -translate-y-1/2 w-[812px] md:scale-[2] lg:scale-[0.84] xl:scale-[1]"
          src="/src/assets/images/line5.png"
          style=""
        />
        <button
          class="font-playfair font-bold border-2 border-white bg-white rounded px-7 py-2 text-3xl absolute bottom-[540px] md:bottom-[460px] lg:bottom-[240px] xl:bottom-[235px] left-[530px] md:left-[525px] lg:left-[740px] xl:left-[955px] lg:scale-[0.8] xl:scale-[1] z-[30]"
          style="color: #25506a"
        >
          Enquire Now
        </button>
        <img
          class="z-[21] absolute top-[79.7%] left-[45.8%] transform -translate-x-1/2 -translate-y-1/2 w-[945px] opacity-[0] lg:opacity-[100] lg:scale-[0.8] xl:scale-[1]"
          src="/src/assets/images/line6.png"
        />

        <img
          class="w-[300px] h-[45px] absolute left-[500px] lg:left-[60px] xl:left-[140px] bottom-[420px] md:bottom-[360px] lg:bottom-[160px] xl:bottom-[150px] scale-[1] md:scale-[1.2] lg:scale-[0.8] xl:scale-[1]"
          src="/src/assets/images/logonetwerk.png"
        />
        <div
          class="absolute top-[650px] md:top-[714px] lg:top-[78.7%] xl:top-[79.7%] left-[650px] lg:left-[22%] xl:leftt-[23.7%] transform -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col"
        >
          <p
            class="font-playfair text-center text-white text-[15.5px] md:text-[20px] lg:text-[12px] xl:text-[15px] font-playfair font-[400] leading-[20px] tracking-[1.5px]"
          >
            GROW WITHOUT BOUNDARIES
          </p>
        </div>
        <div
          class="absolute top-[680px] md:top-[750px] lg:top-[470px] xl:top-[480px] left-[730px] md:left-[688px] lg:left-[57%] xl:left-[53%] transform -translate-x-1/2 w-[465px]"
        >
          <p
            class="font-playfair text-white text-[16px] md:text-[20px] lg:text-[14px] xl:text-[15px] font-playfair leading-[25px] font-lighter w-[66%] md:w-[83%] lg:w-[95%] text-center lg:text-left"
          >
            We believe in leveraging digital prowess for a greater<br
              class="hidden lg:block"
            />
            purpose. Partner with us to make a difference, fostering growth not only for
            your brand but for society at large.
          </p>
        </div>
        <div
          class="sosmed flex items-center absolute bottom-[180px] md:bottom-[130px] left-[575px] left-[567px] lg:left-[78.5%] xl:left-[77%] scale-[1.3] md:scale-[1.5] lg:scale-[0.9] xl:scale-[1]"
        >
          <img src="" ref="facebookImage" alt="facebook" />
          <img src="" ref="linkedInImage" alt="linkedIn" />
          <img src="" ref="instagramImage" alt="instagram" />
        </div>
        <div
          class="w-[169px] h-[34px] pl-[30px] pr-[30px] pt-[10px] pb-[10px] bg-white rounded-[3px] absolute justify-center items-center gap-[10px] inline-flex bottom-[85px] lg:bottom-[90px] xl:bottom-[85px] left-[76%] lg:left-[78%] xl:left-[76%] z-[21] opacity-0 lg:opacity-[100%] lg:scale-[0.9] xl:scale-[1]"
        >
          <button
            class="text-[20px] font-playfair font-[700] leading-[32px]"
            style="color: #25506a"
          >
            Join with us
          </button>
        </div>
        <div
          class="text-white text-center lg:text-left text-[13px] md:text-[17px] lg:text-[10px] xl:text-[17px] font-playfair font-[400] leading-[20px] tracking-[1.30px] absolute bottom-[80px] md:bottom-[45px] lg:bottom-[50px] left-[500px] md:left-[450px] lg:left-[90px] xl:left-[140px] w-[23%] md:w-[30%] lg:w-[100%] xl:w-auto"
        >
          THE-NETWERK Copyright © 2010-2024 all rights reserved. Designed and Developed
          with ❤️ at Malang, Indonesia.
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 lg:right-[50px] xl:right-44 h-[1680px] z-0 opacity-0 lg:opacity-[100] w-[70%] lg:w-[30%] xl:w-[auto]"
    >
      <img
        class="sticky top-0 right-0"
        style="transform: rotate(-5.53deg); transform-origin: 0 0"
        src="/src/assets/images/diver.png"
      />
    </div>
  </div>
  <button class="back-to-top" @click="scrollToTop" v-show="showButton">
    <svg
      class="backToTop-button"
      height="18px"
      width="18px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512.01 512.01"
      xml:space="preserve"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path
              d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165 s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251 C514.096,380.08,514.096,366.597,505.755,358.256z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </button>
</template>

<style>
.custom-shape-divider-bottom-1709625184 {
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
  fill: #ffffff;
}

.container {
  /* Center-align the items vertically */
  margin: 45px 15px;
  width: 324px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    margin: 250px 15px;
  }
}

.container img {
  width: 305px;
  height: auto;
  position: relative;
  z-index: 3;
  margin: 0 px;
  bottom: -60px;
  /* Keep the original positioning */
}

.text-container {
  position: absolute;
  width: 100%;
  text-align: center;
  color: white;
  /* Adjust text color */
  z-index: 5;
  /* Ensure the text is above other elements */
}

.custom-shape-divider-bottom-1709889332 {
  position: absolute;
  bottom: -190px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  scale: 1.4;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-bottom-1709889332 {
    opacity: 0;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .custom-shape-divider-bottom-1709889332 {
    bottom: -30px;
  }
  .container {
    margin: 12px 15px;
  }
}
.custom-shape-divider-bottom-1709889332 .shape-fill {
  fill: #ffffff;
  /* Set fill color to white */
}

.card-content {
  width: 288px;
  height: 260px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #f2f2f2;
  border-radius: 9px;
  transition: background-color 0.3s;
  /* Add transition for smooth hover effect */
}

.card:hover .card-content {
  background-color: #044f3c;
}

.beonco-content {
  width: 400px;
  height: 419px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #b22222;
  border-radius: 9px;
  transition: background-color 0.3s;
}

.beonco:hover .beonco-content {
  background-color: #8d0000;
  /* Change to the desired hover color */
}

.sosmed img {
  margin-right: 15px;
  /* Adjust the margin as needed */
}

.ipo-content {
  background-color: #f2f2f2;
  width: 288px;
  height: 450px;
  left: 0px;
  top: 0px;
  position: absolute;
  border-radius: 9px;
  transition: all 0.3s ease;
}

.ipo-button {
  font-family: Playfair Display;
  font-weight: bold;
  width: 200px;
  border: 2px solid black;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 1px 8px;
  /* py px */
  transition: all 0.3s ease;
}

.ipo-text {
  position: absolute;
  left: 60px;
  top: 90px;
  color: black;
  font-family: Playfair Display;
  transition: all 0.3s ease;
}

.ipo-content:hover .ipo-button {
  color: black;
  background-color: white;
  border-color: white;
}

.ipo-content:hover .ipo-text {
  color: white;
}

.ipo-content:hover {
  background-color: black;
}
.Tag-background {
  background: #0d6c54;
  border-radius: 9px;
  transition: all 0.3s ease;
}
.Tag-background:hover {
  background: #284184;
}
.Tag-overlay {
  opacity: 0.6;
  background: #044f3c;
  box-shadow: 101px 101px 101px;
  border-radius: 9999px;
  filter: blur(101px);
  transition: all 0.3s ease;
}
.Tag-background:hover + .Tag-overlay {
  opacity: 0.6;
  background: #4863aa;
  box-shadow: 101px 101px 101px;
  border-radius: 9999px;
  filter: blur(101px);
}
.hover-div {
  transition: transform 0.8s ease;
}

.container:hover .hover-div {
  transform: translateY(-95%);
}

.box-text {
  transition: transform 1s ease;
}
.container:hover .box-text {
  transform: translateY(-100%);
}

.back-to-top {
  position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    color: white;
    border: none;
    border-radius: 50%;
  cursor: pointer;
  padding: 10px 10px; /* Initially hide the button */
  transition: background-color 0.3s ease;
}
.back-to-top:hover{
  background-color: black;
}
.backToTop-button{
  fill: black;
  transition: fill 0.3s ease;
}

.back-to-top:hover .backToTop-button{
  fill: white;
}

.tagidPhone{
  transition: transform 1s ease;
}
.tagidAIContainer:hover .tagidPhone{
  transform: translateY(89%);
}
.tagidBackground{
  background: #0d6c54;
  border-radius: 9px;
  transition: background-color 0.5s ease;
}
.tagidAIContainer:hover .tagidBackground{
  background-color: #284184;
}

.outsource-Container {
  background-color: #f2f2f2; /* Add initial background color */
  border-radius: 9px;
  transition: background-color 1s ease; /* Transition for background-color */
}

.outsource-Container:hover {
  background-color: black; /* Change background color on hover */
}

.head2 {
  transition: transform 0.3s ease; /* Transition for transform */
}

/* Apply hover effect to the parent element or desired element */
.theOutsource:hover .head2 {
  transform: translateX(30%);
}

</style>
