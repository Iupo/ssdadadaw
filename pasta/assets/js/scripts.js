import { Cards } from "./Cards.js";

window.onload = () => {
    let animaCards = new Cards()
    document.addEventListener('scroll', animaCards.calculoScroll)
}   