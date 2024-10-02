const item  = document.querySelector("#item");

const  toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
         console.log(this.value);
           this.value = ""
        }
    }
)
const addToDo = (item) =>{
    const  listitem = document.createElement("li");
    listItem.innerHTML = `${item}  <i class="fas fa-times"></i>`;

listItems.addEventListener(
    "click",
    function(){
        this.classList.toogle("done");
    }
)
listItems.querySelector("i").addEventListener(
    "click",
    function(){
        listItems.remove()
    }
)
toDoBox.append(listItem);
}