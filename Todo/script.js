const savebtn = document.querySelector("save-menu");

const dbmenu = [
    {name: "pizza", price : "$10"},
    {name: "burger", price : "$9"},
    {name: "fries", price : "$5"},
    {name: "coke", price : "$2"},
    {name: "water", price : "$1"},
    {name: "soda", price : "$1"},
];





savebtn.addEventListener("click", () =>{
    alert("add new menu")
    const name = "add"
   const price = prompt("Food Price")
     const newmenu = {
         name: name,
         price: price
     };
dbmenu.push(newmenu);
})

