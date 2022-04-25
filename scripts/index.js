// Store the wallet amount to your local storage with key "amount"
let amount =0 ; 

function wallet(){

let s  = document.getElementById("amount").value;
s=+s; 
amount = amount+s;
localStorage.setItem("amount",JSON.stringify(amount));
console.log(amount);
let wall = document.getElementById("wallet");
wall.innerHTML=amount;
}

function movie(){
window.location.href="movies.html"
}

