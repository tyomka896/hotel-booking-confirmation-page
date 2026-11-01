import Alpine from "alpinejs";

import { navLinks, heroButtons } from "./data";
import "./style.css";

window.Alpine = Alpine;

Alpine.data("navLinks", navLinks);
Alpine.data("heroButtons", heroButtons);
Alpine.start();

const menuButton = document.querySelector("#menu-button")!;
const header = document.querySelector("#header")!;
const navMenu = document.querySelector("#nav-menu")!;

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");
    navMenu.classList.toggle("hidden", !isOpen);
    header.classList.toggle("sticky", isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
});
