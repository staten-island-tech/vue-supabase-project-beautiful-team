<script>
import { onMounted } from 'vue';
import { supabase, Logged} from '../lib/supabaseClient.js'
</script>

<template>
    <h1> Welcome to Evan's pokemon trading website</h1>
         <nav>
    <RouterLink to="/Sign"> Go to Signup </RouterLink>
    <RouterLink to="/Log"> Go To Log In</RouterLink>
    <RouterLink to="/"> Go To Home</RouterLink>
    <RouterLink to="/Cards"> Go To Cards</RouterLink>
    <RouterLink to="/Post"> Go To Feed</RouterLink>
  </nav> 
</template>