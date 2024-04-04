<script setup>
 import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
const PokeCards = "https://api.pokemontcg.io/v2/cards/"
const GrabCards = await fetch(PokeCards);
/* import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue' */
const PokeCardJSON = await GrabCards.json();


  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
  console.log(data)
</script>
<template>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </template>