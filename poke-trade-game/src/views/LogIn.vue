<script setup>
import { RouterLink, RouterView } from 'vue-router'
/* import HelloWorld from './components/HelloWorld.vue' */
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
/* const test = ref([]) */
const email = ref('')
const password = ref('')

async function LogIn(){
 const Log = await supabase.auth.signInWithPassword({

  email: email.value,
  password: password.value,
})
/* console.log(Log) */}

</script>
<template>
    <h1> Log In </h1>
    <input type="text" v-model="email" placeholder="Email!">
    <input type="password" v-model ="password" placeholder="Password!">
    <button @click="LogIn"> Log In </button>
    <RouterLink to="/"> Go To Home</RouterLink>
</template>