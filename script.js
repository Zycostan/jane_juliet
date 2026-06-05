const left = document.getElementById("left-side");
const header = document.querySelector("larping_head");

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
}

header.onmousemove = e => handleOnMove(e);

header.ontouchmove = e => handleOnMove(e.touches[0]);