const open = document.querySelector(".open");
const closed = document.querySelector(".closed");

const closedFace = () => { 
    if (open.classList.contains("open")) {
        open.classList.add("active");
        closed.classList.remove("active");
    }
};

const openFace = () => {
    if (closed.classList.contains("closed")) {
        closed.classList.add("active");
        open.classList.remove("active");
    }
}

open.addEventListener("click", openFace);
closed.addEventListener("click", closedFace);