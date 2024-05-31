<script>
const DOMSelectors = {
Thing : document.getElementById("body")}

const Link = "https://pokeapi.co/api/v2/pokemon/"
async function GetInput(){
  try {
       const response = await fetch(Link);
       const stuff = await response.json();  
              stuff.results.forEach((card) => {
               const FirstName = card.name
               const cards = `<h1> ${FirstName} </h1>`
                     console.log(FirstName)
                     console.log(stuff)
             DOMSelectors.Thing.insertAdjacentHTML('beforeend', cards)})}
       catch(error) {
          console.log(error)
         
        }};
GetInput()
</script> 
 <template>
        <RouterLink to="/"> Go To Home</RouterLink>
     <body></body>
 </template>