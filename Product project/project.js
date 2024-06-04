let shop = JSON.parse(localStorage.getItem("shop"))
   ? JSON.parse(localStorage.getItem("shop"))
   : [
        { _id: 1, name: "Pen", color: ["blue", "red", "black"], price: 2000 },
        {
           _id: 2,
           name: "Pencil",
           color: ["blue", "red", "black"],
           price: 3000,
        },
        { _id: 3, name: "paper", color: ["blue", "red", "black"], price: 4000 },
        {
           _id: 4,
           name: "notebook",
           color: ["blue", "red", "black"],
           price: 5000,
        },
        { _id: 5, name: "book", color: ["blue", "red", "black"], price: 6000 },
     ];

localStorage.setItem("shop", JSON.stringify(shop));

////////////////////////////////////////////////////////////////////////////////////////
function setLocalStorage() {
   localStorage.setItem("shop", JSON.stringify(shop));
}

function displayProducts(db = shop) {
   db.forEach((item, index) => {
      console.log(`${item._id}. ${item.name} - ${item.color} - $${item.price}`);
   });
}

function addProduct() {
   const newProduct = {
      _id: shop.length + 1,
      name: prompt(`Mahsulot nomini kiriting ${newProduct.name}`),
      color: prompt(`Mahsulot rangini kiriting ${newProduct.color}`),
      price: prompt(`mahsulot narxini kiriting ${newProduct.price}`),
   };

   shop = [...shop, newProduct];
   setLocalStorage();
}

function updateProduct() {
   const productID = 1;

   shop = shop.map((product) =>
      product._id === productID
         ? {
              ...product,
             name: prompt(`Mhsulot nomini kiriting ${product.name}`),
             color:prompt(`Mahsulot rangini kiriting ${product.color}`),
             price:(prompt(`Mahsulot narxi kiriting ${product.price}`)),
           }
         : product
   );

   setLocalStorage();
}

function removeProduct() {
   const productID = 2;

   shop = shop.filter((product) => product._id !== productID);

   setLocalStorage();
}

function searchProduct() {
   const product = "book";
   product.toLowerCase();

   const result = shop.filter((item) =>
      item.name.toLowerCase().includes(product)
   );

   displayProducts(result);
}

function totalPrice() {
   const result = shop.reduce((sum, item) => sum + item.price, 0);

   console.log(`Total price: $${result}`);
}


// updateProduct();
// removeProduct();
// searchProduct();
// addProduct();
// totalPrice();
// displayProducts();

// DRY -> Don't Repeat Yourself


prompt(
    "1 - Mahsulotlar ro'yhati\n2 - Mahsulotni izlash\n3 - Mahsulot qo'shish\n4 - Mahsulotni tahrirlash\n5 - Mahsulotni o'chirish\n6 - Mahsulotni umumiy narxi\n\n0 - Dasturdan chiqish"
 );

 switch(question) {
    case '1': displayProducts(); break;
    case '2': searchProduct(); break;
    case '3': addProduct(); break;
    case '4': updateProduct(); break;
    case '5': removeProduct(); break;
    case '6': totalPrice(); break;
    default: alert('Invalid operator')
}
