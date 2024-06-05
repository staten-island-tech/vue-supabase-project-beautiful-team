<script>
import { onMounted } from 'vue';
import { supabase, Logged} from '../lib/supabaseClient.js'
</script>

<template>
    <h1> Welcome to Evan's pokemon trading website</h1>
         <nav>
    <RouterLink class="Link" to="/Sign"> Go to Signup </RouterLink>
    <RouterLink class="Link" to="/Log"> Go To Log In</RouterLink>
    <RouterLink  class="Link"to="/"> Go To Home</RouterLink>
    <RouterLink class="Link" to="/Cards"> Go To Cards</RouterLink>
    <RouterLink class="Link" to="/Post"> Go To Feed</RouterLink>
  </nav> 
</template>
<style>
h1,.Link{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h1{
  color: #49b8f9
}
.Link{
  color : #f2b64a
}
body{
  background-color : #2e2f2f
}
</style>