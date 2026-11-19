(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const currentLabel = document.querySelector("#current-slide");
  const totalLabel = document.querySelector("#slide-total");
  const progress = document.querySelector(".progress-bar");
  const contents = document.querySelector("#contents");
  const contentsButton = document.querySelector("#contents-toggle");
  const languageLinks = [...document.querySelectorAll(".language-switch a")];
  const brand = document.querySelector(".brand-name").textContent;
  const labels = document.documentElement.lang === "cs"
    ? { title: "Kurz Gitu", copied: "Zkopírováno", copyUnavailable: "Kopírování není dostupné" }
    : { title: "Git training", copied: "Copied", copyUnavailable: "Copy unavailable" };
  const visibleSlides = slides;
  slides.forEach((slide, index) => {
    if (!slide.id) slide.id = `slide-${index + 1}`;
  });
  let current = Math.max(0, slides.findIndex(slide => `#${slide.id}` === window.location.hash));

  const render = () => {
    visibleSlides.forEach((slide, index) => {
      slide.hidden = index !== current;
      slide.setAttribute("aria-hidden", String(index !== current));
    });
    const active = visibleSlides[current];
    if (!active) return;
    currentLabel.textContent = String(current + 1);
    totalLabel.textContent = String(visibleSlides.length);
    progress.style.width = `${((current + 1) / visibleSlides.length) * 100}%`;
    progress.parentElement.setAttribute("aria-valuenow", String(Math.round(((current + 1) / visibleSlides.length) * 100)));
    document.title = `${active.dataset.title || active.querySelector("h1, h2")?.textContent || labels.title} — ${brand}`;
    languageLinks.forEach(link => { link.hash = active.id; });
    document.querySelectorAll(".contents-panel a").forEach(link => {
      link.setAttribute("aria-current", link.dataset.slide === active.id ? "true" : "false");
    });
    document.querySelector("#previous").disabled = current === 0;
    document.querySelector("#next").disabled = current === visibleSlides.length - 1;
  };

  const go = index => {
    current = Math.max(0, Math.min(index, visibleSlides.length - 1));
    render();
  };

  document.querySelector("#previous").addEventListener("click", () => go(current - 1));
  document.querySelector("#next").addEventListener("click", () => go(current + 1));
  contentsButton.addEventListener("click", () => {
    contents.hidden = !contents.hidden;
    contentsButton.setAttribute("aria-expanded", String(!contents.hidden));
    if (!contents.hidden) contents.querySelector("a")?.focus();
  });
  contents.addEventListener("click", event => {
    const link = event.target.closest("a[data-slide]");
    if (!link) return;
    event.preventDefault();
    const destination = visibleSlides.findIndex(slide => slide.id === link.dataset.slide);
    if (destination >= 0) go(destination);
    contents.hidden = true;
    contentsButton.setAttribute("aria-expanded", "false");
    contentsButton.focus();
  });
  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.matches("input, textarea, select, [contenteditable=true]")) return;
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      go(current + 1);
    } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      go(current - 1);
    } else if (event.key === "Home") go(0);
    else if (event.key === "End") go(visibleSlides.length - 1);
    else if (event.key === "Escape" && !contents.hidden) {
      contents.hidden = true;
      contentsButton.setAttribute("aria-expanded", "false");
      contentsButton.focus();
    }
  });
  document.querySelectorAll(".copy").forEach(button => {
    const defaultLabel = button.textContent;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.closest(".command").querySelector("pre").innerText);
        button.textContent = labels.copied;
        window.setTimeout(() => { button.textContent = defaultLabel; }, 1400);
      } catch {
        button.textContent = labels.copyUnavailable;
        window.setTimeout(() => { button.textContent = defaultLabel; }, 1800);
      }
    });
  });
  render();
})();
