<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
const test = ref([])
async function getTest() {
  /*  const { data } = await supabase.from('test').select()
  test.value = data  */
  console.log('hi')
/* console.log(data,) */ //null
  
}
onMounted(() => {
  getTest()
/*   signUp() */
  signUpNewUser()
}) // how do i do thuis
 async function signUpNewUser(){
  const { data, error}  = await supabase.auth.signUp({
  email: 'example@email.com', // email test
  password: 'example-password', // password test
  options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  
}
    , console.log('test',))
}
</script> -->
<script>
 const PokeCards = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
const GrabCards = await fetch(PokeCards);
const PokeCardJSON = await GrabCards.json();  
 function pokemons(){
  
    PokeCardJSON.forEach((thing )=> {
    console.log(thing.results.name)}
);} 
 pokemons() 
</script>
<template>
  <ul>
    <h1>Log in below!!!</h1>
    <li v-for="name in test" :key="name.id">{{ name.name }}</li>
  </ul>
</template>