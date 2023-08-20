const element = document.getElementById("title");

element.addEventListener("animationend", () => {
    // Set your final state here. For example:
    element.style["opacity"] = 1;
}, { once: true });