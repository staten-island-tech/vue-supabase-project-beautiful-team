

<script setup>
// Stuff Left to Do 1.) Fix Poke/UUID, 2.) Connect em, 3.) Posting, 4.) Refresh/going back,
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
import { ref, onMounted } from 'vue'
import {useRouter} from 'vue-router'
import { Logged, supabase } from '@/lib/supabaseClient';
import { useStore } from '@/stores/piniastore.js';
const router = useRouter()
const PiniaFunction = useStore()
onMounted (async () => {
       console.log(Logged)
       if (!Logged.value){
       router.push('/Log')}
})
let Money = 1
let boughtpoke 
 async function BuyPoke(poke){
       if(Money >= 1){
              Money = 0
              alert('Pokemon Bought')
              console.log('test', Money)
              Bought.value = true
              boughtpoke = poke
       
             /*  console.log(boughtpoke)
              console.log(boughtpoke.name) */
       
              let {data, error} = await supabase
                     .from("pokemon")
                     .insert({name: boughtpoke.name,  user_uuid: PiniaFunction.pokecheck.user.id})
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
       // make a seperate table for pokemon, make id's for them, owners uuid
        }}; //make a variable that stores if it's bought and name of what has been bought. in v-for, display div if item.name = bought.name
GetInput()

</script> 
<template>
       <h1> Purchase One Pokemon</h1>
       <div v-if="Bought"> <h1>  {{ boughtpoke.name }}, Pokemon Bought, No more for you!  </h1></div><!-- send to poke table, use pinia to utilize session id. -->
       <RouterLink class="Link" to="/"> Go To Home</RouterLink>  
       <div v-for="item in itemsArray" id="app" >
              <p class='poke'>{{item.name}}</p>
              
              <button class="btn" @click="BuyPoke(item)">Buy This Pokemon ({{ (Money) }})</button> 
       </div> 
 </template>
 <style>
.poke{
                    margin-left: 100px;
                    outline: 0;
                    border: 0;
                    background-color:rgb(127, 85, 224);
                    padding: 8px 16px;
                    font-size: 16px;
                    font-weight: 700;
                    color: white;
                    line-height: 26px;
}
 .btn{
       display: inline-block;
                    outline: 0;
                    border: 0;
                    cursor: pointer;
                    background-color:rgb(224, 85, 85);
                    padding: 8px 16px;
                    font-size: 16px;
                    font-weight: 700;
                    color: white;
                    line-height: 26px;
                    /* thank you huemint */
                
 }
</style>