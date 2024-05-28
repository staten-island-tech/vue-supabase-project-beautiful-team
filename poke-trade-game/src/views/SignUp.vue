<script setup>
import { RouterLink, RouterView } from 'vue-router'
/* import HelloWorld from './components/HelloWorld.vue' */
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const test = ref([])
const email = ref('')
const password = ref('')
//async function getTest() {
  /*  const { data } = await supabase.from('test').select()
  test.value = data  */
  //console.log('hi')
/* console.log(data,) */ //null
//}
 async function signUpNewUser(){
  const Users = await supabase.auth.signUp({
    
  email: email.value , // email test
  password: password.value  ,// password test
  options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
}
    ,)
    console.log('test', Users, email, password)
/*   const {data, error} = await supabase
    .from }*/
 }
async function LogIn(){
 const Log = await supabase.auth.signInWithPassword({
  email: email.value,
  password: password.value,
})}
</script> 
<template>
  <ul>
    <h1>Sign Up!!</h1>
    <input type="text" v-model="email" placeholder="Email!">
    <input type="password" v-model ="password" placeholder="Password!">
    <button @click="signUpNewUser"> Sign Up </button>
    <h1> Log In</h1>
    <button @click="LogIn"> Log In</button>

  </ul>
</template> 
 <!--  <script>
  const PokeCards = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
 const GrabCards = await fetch(PokeCards);
 const PokeCardJSON = await GrabCards.json();  
  function pokemons(){
   
     PokeCardJSON.forEach((thing )=> {
     console.log(thing.results.name)}
 );} 
  pokemons() 
 </script> --> 