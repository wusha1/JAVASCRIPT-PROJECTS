// one_page_website.js
// Lightbox (modal image gallery) for all images on the page

document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.querySelectorAll("#gallery img"));
  if (images.length === 0) return;

  // Build lightbox HTML once
  const overlay = document.createElement("div");
  overlay.id = "lightboxOverlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div id="lightboxContent" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button id="lightboxClose" type="button" aria-label="Close">&times;</button>
      <button id="lightboxPrev" type="button" aria-label="Previous image">&#10094;</button>
      <img id="lightboxImage" alt="">
      <button id="lightboxNext" type="button" aria-label="Next image">&#10095;</button>
      <div id="lightboxCaption"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const lbImg = document.getElementById("lightboxImage");
  const lbCaption = document.getElementById("lightboxCaption");
  const btnClose = document.getElementById("lightboxClose");
  const btnPrev = document.getElementById("lightboxPrev");
  const btnNext = document.getElementById("lightboxNext");

  let currentIndex = 0;

  // Use a larger image if provided; otherwise use the thumbnail src
  // (Tip requirement: add data-large="path/to/large.jpg" on each <img>)
  function getLargeSrc(imgEl) {
    return imgEl.getAttribute("data-large") || imgEl.src;
  }

  function openLightbox(index) {
    currentIndex = index;
    const imgEl = images[currentIndex];

    lbImg.src = getLargeSrc(imgEl);
    lbImg.alt = imgEl.alt || "Expanded image";
    lbCaption.textContent = imgEl.alt || "";

    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
  }

  // Attach click handlers to gallery images
  images.forEach((img, idx) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(idx));
  });

  // Close actions
  btnClose.addEventListener("click", closeLightbox);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });

  // Navigation
  btnNext.addEventListener("click", showNext);
  btnPrev.addEventListener("click", showPrev);

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (overlay.getAttribute("aria-hidden") === "true") return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
});
