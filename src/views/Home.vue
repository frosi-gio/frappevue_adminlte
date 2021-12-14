<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Info boxes -->
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box">
                

                <div class="info-box-content">
                 
                    
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box mb-3">
               

                <div class="info-box-content">

                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->

            <!-- fix for small devices only -->
            <div class="clearfix hidden-md-up"></div>

            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box mb-3">


                <div class="info-box-content">
                 
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box mb-3">


                <div class="info-box-content">
                  
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
          </div>
          <!-- Main row -->
          <div class="row">
            <!-- Left col -->
            <div class="col-md-8">
            </div>
          </div>
          <!-- /.row -->
        </div><!--/. container-fluid -->
      </section>
      <!-- /.content -->
    </div>

</template>

<script>
// @ is an alias to /src
let frappe = null;

export default {
  name: 'Home',
  props: {
      // frappe: {
      //     required: true
      // }
  },
  data(){
      return {
          title: 'Home'
      }
  },
  components: {

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
