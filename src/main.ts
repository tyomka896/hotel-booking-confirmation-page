import Alpine from "alpinejs";

import { navLinks, heroButtons } from "./data";
import "./style.css";

window.Alpine = Alpine;

Alpine.data("navLinks", navLinks);
Alpine.data("heroButtons", heroButtons);
Alpine.start();
