<template>
<div class="container" id="vue-cal">
<VueCal />
</div>


</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'


export default {
    setup() {
        
    },
    components: { VueCal },
  data: () => ({
    
    
  }),
}
</script>

<style scoped>
.vue-cal{
 height: 250px;
 }
</style>