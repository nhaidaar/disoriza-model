const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Native details remain usable without JavaScript; interrupted motion resumes in place.
document
  .querySelectorAll(".faq-list details, .mobile-nav")
  .forEach((details) => {
    const summary = details.querySelector("summary");
    const content = details.querySelector(".faq-answer, nav");
    const isMenu = details.matches(".mobile-nav");
    let expanded = details.open;
    let animation;

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      const currentStyle = getComputedStyle(content);
      const start = isMenu
        ? {
            opacity: details.open ? currentStyle.opacity : 0,
            transform: details.open
              ? currentStyle.transform
              : "translateY(-6px)",
          }
        : { height: `${details.getBoundingClientRect().height}px` };
      animation?.cancel();
      expanded = !expanded;
      content.inert = !expanded;
      summary.setAttribute("aria-expanded", String(expanded));

      const settle = () => {
        details.open = expanded;
        delete details.dataset.closing;
        details.style.overflow = "";
        animation = null;
      };
      if (reducedMotion.matches) {
        settle();
        return;
      }

      details.open = true;
      details.toggleAttribute("data-closing", !expanded);
      let end;
      if (isMenu) {
        end = {
          opacity: expanded ? 1 : 0,
          transform: `translateY(${expanded ? 0 : -4}px)`,
        };
      } else {
        const style = getComputedStyle(details);
        const closedHeight =
          summary.getBoundingClientRect().height +
          parseFloat(style.paddingTop) +
          parseFloat(style.paddingBottom) +
          parseFloat(style.borderTopWidth) +
          parseFloat(style.borderBottomWidth);
        end = {
          height: `${expanded ? details.getBoundingClientRect().height : closedHeight}px`,
        };
        details.style.overflow = "hidden";
      }
      animation = (isMenu ? content : details).animate([start, end], {
        duration: isMenu ? (expanded ? 240 : 180) : expanded ? 360 : 280,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      });
      animation.onfinish = settle;
    });

    if (isMenu) {
      content.addEventListener("click", (event) => {
        if (expanded && event.target.closest("a")) summary.click();
      });
      document.addEventListener("click", (event) => {
        if (expanded && !details.contains(event.target)) summary.click();
      });
      details.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && expanded) {
          summary.click();
          summary.focus();
        }
      });
    }

    window.addEventListener("resize", () => animation?.finish());
    reducedMotion.addEventListener("change", () => animation?.finish());
  });
