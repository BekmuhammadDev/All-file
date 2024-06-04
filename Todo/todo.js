
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Showbtn = document.querySelector("#Showbtn-Todo")
const addbtn = document.querySelector("#add-todo")


let menu = [
  {
    name: "pizza",
    price: 100,
  },
  {
    name: "burger",
    price: 200,
  },
  {
    name: "pasta",
    price: 300,
  },
  {
    name: "salad",
    price: 400,
  },
  {
    name: "icecream",
    price: 500,
  }
]

addbtn.addEventListener("click", () => {


let name = prompt(`name food`)
let price = prompt(`$`)

let newmenu = {
  name: name,
  price: price,

}
menu.push(newmenu);

localStorage.setItem("newmenu", JSON.stringify(newmenu))
alert(localStorage.getItem("newmenu"))
})

Showbtn.addEventListener("click", () => {

  alert(localStorage.getItem("newmenu"));

})




///////////////////////////////////////////////////////////////////////////////////

