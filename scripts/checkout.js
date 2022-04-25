// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount= localStorage.getItem("amount");
let h  =document.getElementById("wallet");
h.innerText=amount;
let div = document.getElementById("movie");

let movie= JSON.parse(localStorage.getItem("movie"));
    let h3=document.createElement("h3")
    h3.innerText=movie.Title;
    
    let img = document.createElement("img")
    img.src=movie.Poster;
    div.append(h3,img);
    function confirm(){
    let ticket =document.getElementById("confirm").value;
    let price = ticket*100
if(price>amount){
    alert("Insufficient Balance!")
} else {
    alert('Booking successful!')
    amount=amount-price
}
    }
