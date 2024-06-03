<template>
     <RouterLink to="/"> Go To Home</RouterLink>
</template>
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

</script>