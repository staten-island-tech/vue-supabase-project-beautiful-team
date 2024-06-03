<template>
       <RouterLink to="/"> Go To Home</RouterLink>
       <div id="app" ></div>
<button @click="BuyPoke()"> test</button>
 </template>
<script>
let Money = 1
function BuyPoke(){ // BuyPoke is not defined when is used in a button, but works when I just run it normally.
if(Money >= 1){
       Money = Money - 1
       console.log('test')
       }
       else{
              console.log('no money')
       }
}
const DOMSelectors = {
      App  : document.getElementById("app"),
}
DOMSelectors.App.insertAdjacentHTML('beforeend', Money)
const Link = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
async function GetInput(){
  try {
       
       const response = await fetch(Link);
       const stuff = await response.json();  
              stuff.results.forEach((card) => {
                     
                      const FirstName = card.name
                   const Up = FirstName[0].toUpperCase() + FirstName.slice(1);
                   const cards = `<h1> ${Up} </h1> <button onclick="BuyPoke()"> Buy One </button>` // Appears on all pages for some reason.
                      DOMSelectors.App.insertAdjacentHTML('beforeend', cards) //If i use @click for this button nothing happens
                      })}
                      
   catch(error) {
          console.log(error)
         
        }};
GetInput()

</script> 