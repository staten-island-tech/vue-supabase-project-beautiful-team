<template>
       <RouterLink to="/"> Go To Home</RouterLink>
       <div id="app"></div>
 </template>
<script>
const DOMSelectors = {
      App  : document.getElementById("app")
}
const Link = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
async function ShowImage(){
       try {
              
}
catch (error) {
          console.log(error)}};
async function GetInput(){
  try {
       const response = await fetch(Link);
       const stuff = await response.json();  
              stuff.results.forEach((card) => {
                      const FirstName = card.name
                   const Up = FirstName[0].toUpperCase() + FirstName.slice(1);
                      const cards = `<h1> ${Up} </h1> <button onClick=ShowImage()> Click For Image </button>`
                      DOMSelectors.App.insertAdjacentHTML('beforeend', cards)})}
   catch(error) {
          console.log(error)
         
        }};
GetInput()
</script> 