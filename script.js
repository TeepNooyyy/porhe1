const heroSect = document.querySelector("section.hero")
const triggerButton = document.querySelector("[data-hero-trigger-button]")
const sashes = document.querySelectorAll(".sash")
triggerButton.onclick = () =>{
    heroSect.classList.toggle("open")
    sashes.forEach(sash =>{
        sash.classList.toggle("open")
    })
}