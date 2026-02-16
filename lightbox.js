
    const images =
    document.querySelectorAll(".gallery-item img");
    const lightbox =
    document.getElementbyId("lightbox");
    const ligtboximg =
    document.getElementById("lightbox-img");
    const caption =
    document.getElementById("lightbox-caption");
    const close =
    document.querySelector(".close");

        images.forEach(img  => {img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboximg.src = img.src;
        caption.innerText = img.alt;
    })});


