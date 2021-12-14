<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Appointments</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <!-- /.card -->
              <DataTable :label="label" :transactions="transactions"
              :detailUrl="detailUrl" @refresh-transactions="fetchAppointments"/>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>

</template>



<script>
    import DataTable from '@/components/DataTable';

    export default {
        'name': 'Appointment',
        data(){
            return {
                title: 'Appointments',
                detailUrl: '/appointment/',
                label: `
                    <tr>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Modified</th>
                    </tr>
                `,
                transactions: []
            }
        },
        methods: {
            async fetchAppointments(){
                // $('#transactions-table').DataTable().destroy();
                let res = await this.$$frappe.get_list('Patient Appointment','fields=[ "name" , "appointment_date","appointment_type","patient","appointment_time","duration","practitioner"]&order_by="appointment_date ASC"'
                );
                // console.log('res', res)
                if(res.status_code==200){
                    console.log(res)
                    this.transactions = res.data;
                } else {
                    this.$popIt.error('Error!', res.text);
                }
            }
        },
        mounted(){
            // if(this.)
            if(!['/login', '/register', '/signup'].includes(this.$route.path)){
                this.user = this.$sessionUserData();
            }
            setTimeout(()=>{
                this.fetchAppointments();
            }, 2000);
            console.log(this.user.full_name)
        },
        components: {
            DataTable
        },
    }
</script>
