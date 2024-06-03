<script>
</script>
<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
/* import HelloWorld from './components/HelloWorld.vue' */
import { ref, onMounted } from 'vue'

import { supabase, Logged  } from '../lib/supabaseClient.js'


/* const test = ref([]) */
const email = ref('')
const password = ref('')
const router = useRouter()

async function LogIn(){
 const {data, error}= await supabase.auth.signInWithPassword({

  email: email.value,
  password: password.value,
})
  if (error){
  console.log(error)
  }
    else{
    console.log('log in success', ) // Logged works here but doesn't carry over to other pages.
    setTimeout(() => {
      Logged.value = true
      router.push('/')
    },2000)
}
/* console.log(Log) */}
async function LogOut(){
  Logged.value = false
  console.log(Logged)
}
</script>
<template>
    <h1> Log In </h1>
    <div v-if='Logged'> <h1> Logged In! </h1> <button @click="LogOut()"> Log Out </button></div>  
    <div v-else> <h1> Not Logged in. </h1></div>
    <input type="text" v-model="email" placeholder="Email!">
    <input type="password" v-model ="password" placeholder="Password!">
    <button @click="LogIn"> Log In </button>
    <RouterLink to="/"> Go To Home</RouterLink>
</template>