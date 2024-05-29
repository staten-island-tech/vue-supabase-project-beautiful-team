<script>
import { RouterLink, RouterView } from 'vue-router'
/* import HelloWorld from './components/HelloWorld.vue' */
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient.js'
</script>
<template>
  <main>
  <RouterView /> </main>
</template>