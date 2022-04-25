// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount= localStorage.getItem("amount");
let h  =document.getElementById("wallet");
h.innerText=amount;
let id;
let div = document.getElementById("movies");

async function search(){
try{
    const query = document.getElementById("search").value; 
    const res = await fetch (`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`) 
    const data = await res.json()
    
    const movie =data.Search;
  return movie; 
} catch (err){
console.log(err);
}
}
div.setAttribute("class","div");
function append(data){
div.innerHTML=null;
data.forEach(function(el){
    let box = document.createElement("div");
    let p = document.createElement("p");
    p.innerText= el.Title;
    let img = document.createElement("img");
    img.src=el.Poster;
    let btn = document.createElement("button");
    btn.innerText='Book Now'
    btn.addEventListener("click", function(){
        click(el);
    })
    box.append(img, p, btn);  
    div.append(box);
})

}
async function main(){
    let data = await search();
    append(data);
}
// debouncing 
function debounce(func, delay){
    if(id){
        clearInterval(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}

function click(el){
   
let arr =el; 
    localStorage.setItem("movie",JSON.stringify(arr))
window.location.href="checkout.html"
}