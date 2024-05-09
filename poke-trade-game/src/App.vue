 <script setup>
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
  const email = ref('')
  const password = ref('')
}
 async function signUpNewUser(){
  const Users = await supabase.auth.signUp({
  email: email.value , // email test
  password: password.value  ,// password test
  options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  
}
    , console.log('test',)) }
onMounted(() => {
  getTest()

  signUpNewUser()
})
</script> 
/* <!--  <script>
 const PokeCards = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
const GrabCards = await fetch(PokeCards);
const PokeCardJSON = await GrabCards.json();  
 function pokemons(){
  
    PokeCardJSON.forEach((thing )=> {
    console.log(thing.results.name)}
);} 
 pokemons() 
</script> --> */
<template>
  <ul>
    <h1>Log in below!!!</h1>
    <li v-for="name in test" :key="name.id">{{ name.name }}</li>
  </ul>
</template> 