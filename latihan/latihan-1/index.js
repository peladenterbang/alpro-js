import {Sum} from "./app.js";

var globalVar = "Variabel using var";
let globalLet = "variable using  let";
const globalConst = "variable using  const";

console.log("globalVar: ", globalVar);
console.log("globalLet: ", globalLet);
console.log("globalConst: ", globalConst);

globalVar = "new var";
globalLet = "new let";
//globalConst = "new const";

console.log("globalVar: ", globalVar);
console.log("globalLet: ", globalLet);
console.log("globalConst: ", globalConst);



// scope 

function variablesScope(){
    var satu = 1;
    var dua = 2;
    let nama = "catur";
}


//console.log(dua);



let Array1 = (1,2,3,4,5,6,7,8);

let SumArray1 = Sum(Array1);

console.log(SumArray1);