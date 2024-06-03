

<script setup>
/* import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '/App.vue'
import { defineStore } from 'pinia'
export const useAlertsStore = defineStore('alerts', {
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app') */
import {useRouter} from 'vue-router'
import { Logged } from '@/lib/supabaseClient';
import { ref, onMounted } from 'vue'
let Money = 1
 const router = useRouter()
onMounted (async () => {
       console.log(Logged)
       if (!Logged.value){
       router.push('/Log')}
})
function BuyPoke(){
if(Money >= 1){
       Money -= 1
       alert('Pokemon Bought')
       console.log('test', Money)
       Bought.value = true
       }
       else{
              console.log('no money')
              alert('You Do not have any more money')
       }
}
/* const DOMSelectors = {
      App  : document.getElementById("app"),
} */
const Bought = ref(false)
const Link = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
let itemsArray = ref([])
async function GetInput(){
  try {
       
       const response = await fetch(Link);
       const stuff = await response.json();
       itemsArray.value = stuff.results
       console.log(itemsArray)
  /*      console.log(stuff.results)  
              stuff.results.forEach((card) => {
                     
                      const FirstName = card.name
                   const Up = FirstName[0].toUpperCase() + FirstName.slice(1);
                   const cards = `<h1> ${Up} </h1> <button onclick="BuyPoke()"> Buy One </button>` // Appears on all pages for some reason.
                      DOMSelectors.App.insertAdjacentHTML('beforeend', cards) //If i use @click for this button nothing happens
                      }) */}
                      
   catch(error) {
              console.log(error)
         
        }};
GetInput()

</script> 
<template>
       <h1> Purchase One Pokemon</h1>
       <div v-if="Bought"> <h1> Pokemon Bought, No more for you! </h1></div>
       <RouterLink to="/"> Go To Home</RouterLink>
       <div v-for="item in itemsArray" id="app" >
              <p>{{item.name}}</p>
              <button @click="BuyPoke()">Buy This Pokemon (1)</button> <!-- i wonder how to take the pokemon they bought and display it -->
       </div> 
 </template>