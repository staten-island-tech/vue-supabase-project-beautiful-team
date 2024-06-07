<script setup>
    import { supabase, Logged  } from '../lib/supabaseClient.js'
    import { ref, onMounted } from 'vue'
import {useRouter} from 'vue-router'
import { useStore } from '@/stores/piniastore.js';
const PiniaFunction = useStore()
const router = useRouter()
const Clicked = ref(false)
let PokeDisplay
onMounted (async () => {
       console.log(Logged)
       if (!Logged.value){
       router.push('/Log')}
})
 async function PostCreation(){
    const {data, error} = await supabase
    .from('pokemon')
    .select('name')
    .eq('user_uuid', PiniaFunction.pokecheck.user.id)
     PokeDisplay = data
     Clicked.value = true
     console.log(Clicked)
     console.log(PokeDisplay)
/*     console.log(PiniaFunction.pokecheck.user.id) */
    }
    PostCreation()
    async function RemovePoke(){
        const {data, error} = await supabase
        .from('pokemon')
        .delete()
        .eq('user_uuid',  PiniaFunction.pokecheck.user.id)
        alert('pokemon deleted')
    }
</script>
<template>
    <h1> Your Pokemon Below :</h1> <p></p>
  <h1>{{ PokeDisplay }}</h1>

    <button @click="RemovePoke()"> Delete your pokemon</button>
    <RouterLink class="Link" to="/"> Go To Home</RouterLink>
</template>