<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <h5>About</h5>
        <div class="container-fluid">
          <vue-cal class="vuecal--blue-theme"></vue-cal>
          <div class="row mb-2">
            <div class="col-sm-6">
              <!-- <h1 class="m-0">Dashboard v2</h1> -->
            </div><!-- /.col -->
            <div class="col-sm-6">
               <div id="cal">
        
    </div><a href="https://antoniandre.github.io/vue-cal" target="_blank">Documentation @
        //antoniandre.github.io/vue-cal</a>

              <!-- <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard v2</li>
              </ol> -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
          <!-- /.content -->
    </div>

</template>

<script>
// @ is an alias to /src
let frappe = null;

export default {
  name: 'About',
  props: {
      // frappe: {
      //     required: true
      // }
  },
  data(){
      return {
          title: 'About'
      }
  },
  components: {
      components: { 'vue-cal': vuecal },

  },
  methods: {
    // frappe: JSON.parse(this.$session.frappe)
    frappe(){
        return this.$frappe;
    }
  },
  mounted(){
      // console.log(this.$frappe);
      // frappe = JSON.parse(this.$session.frappe);
  }
}
</script>

