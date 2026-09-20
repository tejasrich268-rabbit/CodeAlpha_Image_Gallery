const galleryItems = document.querySelectorAll(".gallery-item");
const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;


/* Open Lightbox */

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;
    });

});


/* Close Lightbox */

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


/* Next Image */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});


/* Previous Image */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});


/* Filter Images */

function filterImages(category) {

    galleryItems.forEach(item => {

        if (category === "all") {

            item.style.display = "block";

        } else {

            if (item.classList.contains(category)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        }

    });

}