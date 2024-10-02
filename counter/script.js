const start = document.querySelector("#start");

const add = document.querySelector("#add");

const substract = document.querySelector("#substract");

const changeBy = document.querySelector("#changeBy");

add.addEventListener("click", () => {
    const addValue = parseInt(start.innerHTML)
    const changeBy = parseInt(changeBy.value)
    start.innerHTML=addValue+changeBy
});

substract.addEventListener("click", () => {
    const substractValue = parseInt(start.innerHTML)
    start.innerHTML=substractValue-1;
});

