<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}
 

onMounted(() => {
  getCountries()
})
</script>
<script>
const PokeCards = "https://api.pokemontcg.io/v2/cards/"
const GrabCards = await fetch(PokeCards);
const PokeCardJSON = await GrabCards.json(); 
function pokemons(){
    PokeCardJSON.forEach(card => {
    const name = card.name
    console.log(name)
});}
pokemons()
</script>
<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>