<script setup>
/* import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue' */
const PokeCards = "https://api.pokemontcg.io/v2/cards/"
const GrabCards = await fetch(PokeCards);
const PokeCardJSON = await GrabCards.json();
</script>