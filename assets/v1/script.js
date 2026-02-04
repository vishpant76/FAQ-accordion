const faqsContainer = document.querySelector(".faq-container");

faqsContainer.addEventListener("click", (e) => {
  // console.log(e.target);
  // console.log(this);
  if (e.target.tagName === "IMG") {
    // console.log(e.target.tagName);
    const nearestParent = e.target.closest(".faq");
    const targetFaqContent = nearestParent.querySelector("p");

    targetFaqContent.classList.toggle("hidden");
  }
});
