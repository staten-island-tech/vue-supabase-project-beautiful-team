<template>
     <RouterLink to="/"> Go To Home</RouterLink>
    <div v-if="Logged"> <button onclick="CreatePost()"> Create Post </button></div>
    <div v-else> <h1> Please Log In to Create A Post </h1></div>
</template>
<script>
    import { supabase, Logged  } from '../lib/supabaseClient.js'

function CreatePost(){
    console.log('hi')
    // take poke id and post the name of it 
}
</script>