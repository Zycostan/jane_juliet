const left = document.getElementById("left-side");
const header = document.querySelector(".larping_head");

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
}

const handleOnMouseMove = e => {
   const {  currentTarget: target } = e;

   const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

   target.style.setProperty("--mouse-x",`${x}px`)
   target.style.setProperty("--mouse-y",`${y}px`)
}

header.onmousemove = e => handleOnMove(e);

header.ontouchmove = e => handleOnMove(e.touches[0]);

for(const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}