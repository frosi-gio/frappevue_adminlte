<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Calendar</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid" height="250px">
      <div class="col-md-12">
       
          
            <VueCal />
          
      </div>
    </div>
  </div>
</template>



<script>
import VueCal from "@/components/VueCal.vue";
export default {
  name: "Dashboard",
  setup() {},
  components: {
    VueCal,
  },
};
</script>

