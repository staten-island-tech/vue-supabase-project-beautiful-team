  <script>
  
  const PokeCards = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
 const GrabCards = await fetch(PokeCards);
 const PokeCardJSON = await GrabCards.json();  
  /* function pokemons(){
   
     PokeCardJSON.forEach((thing )=> {
     console.log(thing.results.name)}
 );} 
  pokemons()  */
 </script> 
 <template>
        <RouterLink to="/"> Go To Home</RouterLink>
 </template>