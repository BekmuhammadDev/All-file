
// function kichraytirish(matn) {
//     return matn.toLowerCase();
// }
// let matn = "BEKMUHAMMAD";

// let kichikharf = kichraytirish(matn);

// console.log(kichikharf);



////////////////////////////////////////////////////////////////////////////////////


// function factor(num1) {
//     if (num1 == 0 || num1 == 1) {
//         return 1;
//     }

//     let hisob = 1;
//     for (let i = 2; i <= num1; i++) {
//         hisob = i;
//     }

//     return hisob;
// }

// let son = 9;
// let natija = factor(son);
// console.log( son,"/", natija); 



/////////////////////////////////////////////////////////////////////////////

// function selsiforenheit(selsi) {
//     const fahrenheit = (selsi * 9/5) + 32;
//     return fahrenheit;
// }

// const selsi = 22;
// const fahrenheit = selsiforenheit(selsi);
// console.log(selsi ," gradus selsi ", fahrenheit ," forenheit teng"); 


////////////////////////////////////////////////////////////////////////////

// let str="Bekmuhammad";

// let slicedstring=str.slice(0,11);
// console.log(slicedstring);

// let str="BEKMUHAMMAD";
// let allUppercase = str.toLocaleLowerCase();
// console.log(allUppercase);  // Barcha harflarni kattalashtiradi//

// let str="bekmuhammad";
// let allLowercase = str.toUpperCase();
// console.log(allLowercase);  // barcha harflarni kichiklashtiradi//

// let str1="Mirabbos";
// let str2="muhiddin";
// let arr = [...str1,...str,...str2]
// console.log(arr);

// console.log(String("M").codePointAt());

// console.log(String.fromCharCode(66));

// const str = "I am string";
// for (let i = 0; i < str.length; i++) {
// console.log(str[i]);

// str[0]
// }



// const sentence = "Javascript is the best! best is the best"
// console.log(sentence);

// const update = sentence.replaceAll("best","😊")
// console.log(update); //HAMMASINI O'RNINI ALMASHTIRADI// WINDOWS VS   . NUQTA STIKER QO'YADI//

// const update = sentence.replace("best","amazing")
// console.log(update);  //o'rin almashtirish//

// let firstname = "Alice";
// let lastname = "smith";
// let Fullname= firstname.concat("","smith")
// console.log(Fullname);

// const messyString = " Hello World ";
// console.log(messyString);
// console.log(messyString.trim()); // boshidan va oxiridan bo'sh joy olish//

// const stiker = "$$$$$$$$$"
// const nam = stiker.repeat(2003)
// console.log(nam);

// const str = "Dasturlash"
// function matn(str,index) {
//     return str[index]
// }
// console.log(matn(str,2),matn(str,5),matn(str,4));

// const str1 = "DsturlAsh";
// const str2 = "DstuRlash";

// function Aniqlash(str,str2) {
//     if (str1.length !== str2.length) { 
//         return "False";
//     }

// for (let i = 0; i < str1.length; index++) {
//     if (str1.toLocaleLowerCase(i) == str2.toLocaleLowerCase(i)) {
//         return true
//     }else{
//         return "False"

//     }
// }
// }
// console.log(Aniqlash(str1,str2));


// const myCar = {
//     make:"BMW",
//     model:"BMW x7",
//     year:"2024",
//     milasge:"0",
//     color:"black",
//     strong:"2000 horse",
//     value: "250$",

// accelaret: function(){
//     console.log("The car is accelareting");
// },
// brake: function(){
//     console.log("the car is breaking");
// },
// honk: function(){
//     console.log("beep beep");
// },


//    fullinfo:function(){

//     console.log(`car color: ${this.model} car probeg ${this.milasge}`);
//    }


// };
// console.log(myCar.fullinfo());

// let = keysOfmyycar = Object.keys(myCar);
// console.log(keysOfmyycar);


// let values =  Object.values(myCar);
// console.log(values);

// let allfunction = Object.entries(myCar);
// console.log(allfunction);

// let car = {
//     make: "BMW",
//     model: "BMW X7",
//     value:"280$"
// }

// let car2 = {
//     color:"gray",
//     value:"300$",
//     model:"BMW X5",
// }

// let car3 = {
//     color:"red",
//     value:"100$",
//     model:"BMW X",
// }



// let allcar = Object.assign({},car2,car,car3);
// // console.log(car);
// // console.log(car2);
// console.log(allcar);


// let make = "BMW"
// let color  ="gray";
// let  model ="BMW X5";


// let car = {
//     make: "BMW",
//     model: "BMW X7",
//     value:"280000$",
//     color:"yellow",
// }

// console.log(car.hasOwnProperty("make"));
// console.log(car.hasOwnProperty("strong"));

// let {
//     make,
//     model,
//     color,
//     value,
// } = car;
// console.log(make,model,value,color);



// let myCar = {
//     make: "BMW",
//     model: "BMW X5",
//     milage: 0,
//     year: 2024,
//     color: "black",
//     'moshinanig egasi':"Bekmuhammad",
//     tez: function () {
//         console.log(`BMW eng tez yuradigan avtomabil`);
//     },
//     sindirish: function () {
//         console.log(`BMW Mercadesni sindiradi`);
//     },
//     signal: function () {
//         console.log(`beep beeeeep`);
//     },
//     // 'toliqmalumot': function () {
//     //     this.signal(),
//     //     this.sindirish(),
//     //     console.log(`Mashina companyasi ${this.make}, Mashina Modeli ${this.model} Mashina bosgan yoli ${this.milage}`);
//     // }
// };

// let hammasi = Object.keys(myCar);
// console.log(hammasi);
// let qiymati = Object.values(myCar);
// console.log(qiymati);
// let hammasi2 = Object.entries(myCar);
// console.log(hammasi2);

// console.log(myCar.toliqmalumot());
// console.log(myCar.model);
// console.log(myCar.tez());
// console.log(myCar.sindirish());
// console.log(myCar.signal());
// console.log(myCar["moshinanig egasi"]);

// myCar.chiroq = () =>{
//         console.log(`BMW qizil chiroq yoqib ketmoqda`);
// }
// console.log(myCar.chiroq());


// let myCar1 = {
//     make: "BMW",
//     model: "BMW X5",
//     milage: 0,
// };

// let myCar2 = {
//     color: "red",
//     strong: "1000h",
//     speed: "10m 300km",
// }

// let fullcar = Object.assign({},myCar1,myCar2)
// console.log(fullcar);


// function personinfo(name, age, currentcity) {
//     return (` Im ${name}. my age ${age}. my from is ${currentcity}.`);
// }
// let result = personinfo(`"Bekmuhammad", "21", "Tashkent",`);
// console.log(result);

// function persominfo2(name, birthdate,) {
//     return (` hi i'am ${name} my birth day ${birthdate}`)
// }

// let result2 = persominfo2 ("Bekmuhammad","15-march");
// console.log(result2);

// function strLength(str) {
//     return str.length;
// };

// let result3 = strLength("Assalomu aleykum va rahmatulloh!");
// console.log(result3);

// function strLength(str) {
//     count = 0;
//     for (let i of str){
//         count ++;

//     }
//     return count;
// }

// let result3 = strLength (`Assalomu aleykum va rahmatulloh`);
// console.log(result3);


// function strLength(str) {
//     count = 0;
//     for (let i of str); {
//         count++;
//     }
//     return count;
// }

// let result3 = strLength(`Assalomu aleykum`);
// console.log(result3);



// function findmiddleposition(str) {
//     let middle = Math.floor(str.length / 2);
//     if (str.length / 2 == 0) {
//         return (`${str[middle -1]} ${str[middle]}`)
//     }
//     return str[middle];
// };
// let result4 = findmiddleposition(`Bekmuamad`);
// console.log(result4);


// function taqqoslash (str1,str2) {
//     if (str1.length !== str2.length ) {
//     };

//     for(let i = 0; i < str1.length; i++){
//         if (str1.charCodeAt(i) !== str2.charCodeAt(i)) {
//             return false;
//         }
//     }
//     return true;
// };
// let result5 = taqqoslash("jack","jack");
// console.log(result5);