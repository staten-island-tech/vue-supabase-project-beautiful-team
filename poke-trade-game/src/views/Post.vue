<script setup>
    import { supabase, Logged  } from '../lib/supabaseClient.js'
    import { ref, onMounted } from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
onMounted (async () => {
       console.log(Logged)
       if (!Logged.value){
       router.push('/Log')}
})
function PostCreation(){

}
</script>
<template>
    

    <input type="text"> Caption of Post</input> <p></p>
    <!-- yoink current pokemon and put it as post information -->
    <button @click="PostCreation">  Create a new Post</button>
    <RouterLink class="Link" to="/"> Go To Home</RouterLink>
</template>