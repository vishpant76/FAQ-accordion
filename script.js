const faqsContainer = document.querySelector(".faq-container");

faqsContainer.addEventListener("click", (e) => {
  const header = e.target.closest(".faq-header");
  if (!header) return;

  const nearestParent = header.closest(".faq");
  const targetFaqContent = nearestParent.querySelector("p");
  const icon = header.querySelector("img");

  targetFaqContent.classList.toggle("hidden");

  const isHidden = targetFaqContent.classList.contains("hidden");
  if (isHidden) {
    icon.src = "./assets/images/icon-plus.svg";
    icon.alt = "plus icon";
  } else {
    icon.src = "./assets/images/icon-minus.svg";
    icon.alt = "minus icon";
  }
});
