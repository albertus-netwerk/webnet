<script>
import gsap from "gsap";

export default {
  methods: {
    openPopupMenu() {
      const popupMenu = document.getElementById("popupMenu");
      popupMenu.style.opacity = 0; // Set initial opacity to 0
      popupMenu.style.display = "block"; // Make sure the menu is visible
      gsap.to(popupMenu, { duration: 0.5, opacity: 1, ease: "power2.out" });
      document.body.style.overflow = "hidden"; // Prevent scrolling of body
    },
    closePopupMenu() {
      const popupMenu = document.getElementById("popupMenu");
      gsap.to(popupMenu, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
          popupMenu.style.display = "none"; // Hide the menu after animation completes
          document.body.style.overflow = "auto"; // Allow scrolling of body
        },
      });
    },

    togglePopupMenu() {
      const popupMenu = document.getElementById("popupMenu");
      if (popupMenu.classList.contains("active")) {
        this.closePopupMenu();
      } else {
        this.openPopupMenu();
      }
    },
  },
  mounted() {
    // Add event listener for the button to toggle the popup menu
    const popupButton = document.getElementById("popupButton");
    if (popupButton) {
      popupButton.addEventListener("click", (event) => {
        // Stop the propagation of the click event to prevent it from triggering the window click event listener
        event.stopPropagation();
        this.togglePopupMenu();
      });
    }

    // Close the popup menu if the user clicks outside of it, but not on the close button
    window.addEventListener("click", (event) => {
      const popupMenu = document.getElementById("popupMenu");
      if (
        popupMenu &&
        !event.target.matches("#popupButton") &&
        !event.target.matches(".popup-menu") &&
        !event.target.matches("#closeButton") &&
        !popupMenu.contains(event.target)
      ) {
        this.closePopupMenu();
      }
    });
  },
};
</script>

<template>
  <div
    id="header"
    class="md:px-10 md:py-5 px-4 py-8 flex justify-between items-center font-playfair"
  >
    <div class="items-center w-auto basis-1/5">
      <div class="md:flex items-start hidden gap-3">
        <p class="text-[20px] leading-[20px]">Lets us tell you a tales</p>
        <img src="../assets/images/taco-icon.png" alt="taco-icon" />
      </div>
    </div>
    <div class="flex basis-3/5 justify-center">
      <img src="../assets/images/icon-small.png" alt="icon-small" />
    </div>
    <div id="popupButton" class="flex items-center basis-1/5 justify-end gap-2">
      <p class="text-[20px] leading-[20px] font-bold md:block hidden">menu</p>
      <img
        src="../assets/images/menu-icon.png"
        class="md:w-[45px] md:h-[45px] w-[35px] h-[35px]"
        alt="menu-icon"
      />
    </div>

    <div id="popupMenu" class="popup-menu justify-center items-center flex">
      <div class="relative">
        <div class="h-[1200px] lg:h-[1080px]" style="width: 100%; position: relative">
          <div
            class="h-[1200px] lg:h-[1080px]"
            style="
              width: 100%;
              left: 0px;
              top: 0px;
              position: absolute;
              background: black;
            "
          ></div>
          <div class="w-[288px] h-[41px] left-[822px] top-[616px] absolute">
            <img src="/src/assets/images/menulogo2.png" />
          </div>
          <div
            class="left-[822px] top-[665px] absolute"
            style="
              color: white;
              font-size: 15px;
              font-family: Playfair Display;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: 1.5px;
              word-wrap: break-word;
            "
          >
            GROW WITHOUT BOUNDRIES
          </div>
          <div
            class="w-[300px] lg:w-[820px] h-[20px] left-[10%] lg:left-[274px] top-[1060px] lg:top-[1020px] absolute"
          >
            <div
              class="absolute text-center lg:text-left"
              style="
                color: white;
                font-size: 13px;
                font-family: Playfair Display;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 1.3px;
                word-wrap: break-word;
              "
            >
              THE-NETWERK Copyright © 2010-2024 all rights reserved. Designed and
              Developed with ❤️ at Malang, Indonesia.
            </div>
          </div>
          <div
            class="w-[465px] left-[822px] top-[697px] absolute"
            style="
              color: white;
              font-size: 15px;
              font-family: Playfair Display;
              font-weight: 400;
              line-height: 25px;
              word-wrap: break-word;
            "
          >
            We believe in leveraging digital prowess for a greater purpose.Partner with us
            to make a difference, fostering growth not only for your brand but for society
            at large.
          </div>
          <div
            class="w-[452px] lg:w-[auto] left-[21px] lg:left-[822px] top-[950px] lg:top-[820px] absolute lg:text-[20px] text-center lg:text-left w-[88%] lg:leading-[30px]"
            style="
              color: white;
              font-family: Playfair Display;
              font-weight: 400;
              word-wrap: break-word;
            "
          >
            Perum Mediterania,Jl. Simpang L.A. Sucipto No.Kav. No.12,Pandanwangi,
            Blimbing,Malang, Jawa Timur, Indonesia 65126
          </div>
          <div class="justify-center items-center flex w-[300px] h-[1080px] ml-[120px]">
            <div class="w-[300px] h-[1080px]">
              <div
                class="top-[183px] absolute text-[32px] lg:text-[53px]"
                style="
                  color: white;
                  font-family: Playfair Display;
                  font-weight: 400;
                  line-height: 55px;
                  word-wrap: break-word;
                "
              >
                About Us
              </div>
              <div
                class="top-[348px] absolute text-[32px] lg:text-[53px]"
                style="
                  color: white;
                  font-family: Playfair Display;
                  font-weight: 400;
                  line-height: 55px;
                  word-wrap: break-word;
                "
              >
                Case Study
              </div>
              <div
                class="top-[513px] absolute text-[32px] lg:text-[53px]"
                style="
                  color: white;
                  font-family: Playfair Display;
                  font-weight: 400;
                  line-height: 55px;
                  word-wrap: break-word;
                "
              >
                Oursource
              </div>
              <div
                class="top-[678px] absolute text-[32px] lg:text-[53px]"
                style="
                  color: white;
                  font-family: Playfair Display;
                  font-weight: 400;
                  line-height: 55px;
                  word-wrap: break-word;
                "
              >
                About IPO
              </div>
              <div
                class="top-[843px] absolute text-[32px] lg:text-[53px]"
                style="
                  color: white;
                  font-family: Playfair Display;
                  font-weight: 400;
                  line-height: 55px;
                  word-wrap: break-word;
                "
              >
                Contact
              </div>
              
            </div>
          </div>

          <div
            class="w-[50px] h-[50px] left-[83%] lg:left-[93%] top-[36px] absolute scale-[0.75] lg:scale-[1]"
            style=""
            @click="closePopupMenu"
          >
            <img src="/src/assets/images/closeicon.png" />
          </div>
          <div
            class="w-[197px] h-[28px] left-[80px] lg:left-[582px] top-[45px] lg:top-[36px] absolute scale-[1.09] lg:scale-[1]"
          >
            <img src="/src/assets/images/menulogo1.png" />
          </div>
          <div
            class="w-[538px] h-[0px] left-[-28px] top-[293px] absolute"
            style="border: 1px #333333 solid"
          ></div>
          <div
            class="w-[538px] h-[0px] left-[-28px] top-[458px] absolute"
            style="border: 1px #333333 solid"
          ></div>
          <div
            class="w-[538px] h-[0px] left-[-28px] top-[623px] absolute"
            style="border: 1px #333333 solid"
          ></div>
          <div
            class="w-[538px] h-[0px] left-[-28px] top-[788px] absolute"
            style="border: 1px #333333 solid"
          ></div>
          <div
            class="w-[1400px] h-[0px] left-[0px] top-[1040px] lg:top-[986px] absolute"
            style="border: 1px #333333 solid"
          ></div>
          <div
            class="w-[578px] h-[0px] left-[822px] top-[802px] absolute"
            style="border: 1px #333333 solid"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.popup-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-x: hidden; /* Prevent scrolling of background screen */
  z-index: 9999;
}

.popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  max-width: 90%;
  max-height: 100%;
  overflow: auto; /* Enable scrolling within the menu */
}

.popup-menu.active {
  display: block; /* Display the menu when active */
}
</style>
