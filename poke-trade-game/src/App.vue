<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
const test = ref([])

async function getTest() {
  const { data } = await supabase.from('test').select()
  test.value = data
}
 

onMounted(() => {
  getTest()
})
</script>
<script>
/* const PokeCards = "https://api.pokemontcg.io/v2/cards/"
const GrabCards = await fetch(PokeCards);
const PokeCardJSON = await GrabCards.json();  */
/* function pokemons(){
    PokeCardJSON.forEach(card => {
    const name = card.name
    console.log(name) too laggy right now
});} */
/* pokemons() */
</script>
<template>
  <ul>
    <li v-for="name in test" :key="name.id">{{ name.name }}</li>
  </ul>
</template>