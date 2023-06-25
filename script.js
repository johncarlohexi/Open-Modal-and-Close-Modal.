let hiddenBox = document.getElementById("hiddenBox");
let showBtn = document.getElementById("openModal");

showBtn.addEventListener("click", () => {
    let showBox = hiddenBox.classList.toggle("active")
    
    if (showBox) {
        showBtn.innerHTML = "Close Modal"
    } else { showBtn.innerHTML = "Open Modal" };
})