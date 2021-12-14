<template>
      <!-- Navbar -->
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" data-widget="pushmenu" to="#" role="button"><i class="fas fa-bars"></i></router-link>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <router-link to="#" class="nav-link">Contact</router-link>
          </li>
        </ul>

    
        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
          <!-- Messages Dropdown Menu -->
          <li class="nav-item dropdown">
            <router-link class="nav-link" data-toggle="dropdown" to="#">
              <i class="far fa-comments"></i>
              <span class="badge badge-danger navbar-badge">3</span>
            </router-link>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img src="/static/dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">Call me whenever you can...</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img src="/static/dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      John Pierce
                      <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">I got your message bro</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img src="/static/dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Nora Silvester
                      <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">The subject goes here</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item dropdown-footer">See All Messages</router-link>
            </div>
          </li>
          <!-- Notifications Dropdown Menu -->
          <li class="nav-item dropdown">
            <router-link class="nav-link" data-toggle="dropdown" to="#">
              <i class="far fa-bell"></i>
              <span class="badge badge-warning navbar-badge">15</span>
            </router-link>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span class="dropdown-item dropdown-header">15 Notifications</span>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i> 4 new messages
                <span class="float-right text-muted text-sm">3 mins</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
                <span class="float-right text-muted text-sm">12 hours</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <i class="fas fa-file mr-2"></i> 3 new reports
                <span class="float-right text-muted text-sm">2 days</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item dropdown-footer">See All Notifications</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" data-widget="fullscreen" to="#" role="button">
              <i class="fas fa-expand-arrows-alt"></i>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" data-toggle="dropdown" to="#">
                <i><div class="media">
                  <img :src="user_image" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                </div></i>
              <!-- <i class="far fa-user fa-2x"></i> -->
              <!-- <span class="badge badge-danger navbar-badge">3</span> -->
            </router-link>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <div class="media-body">
                    <h3 class="dropdown-item-title text-center">
                      <router-link to="/profile" class="text-center">Profile</router-link>
                    </h3>
                </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <div class="media-body">
                    <h3 class="dropdown-item-title text-center">
                      <p @click.prevent="logout" class="text-center">Logout</p>
                    </h3>
                </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>

              <router-link to="#" class="dropdown-item dropdown-footer">See All Messages</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" data-widget="control-sidebar" data-slide="true" to="#" role="button">
              <i class="fas fa-th-large"></i>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link to="/" class="brand-link">
          <img src="/static/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
          <span class="brand-text font-weight-light">Salon Leusden 3</span>
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img :src="user_image" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
              <router-link to="#" class="d-block">  </router-link>
            </div>
          </div>


          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <!-- Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library -->
              <li class="nav-item menu-open">
                <router-link to="/" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <!-- <i class="right fas fa-angle-left"></i> -->
                  </p>
                </router-link>

              </li>
              <li class="nav-item">
                <router-link to="/my-invoices" class="nav-link">
                  <i class="nav-icon fas fa-file-invoice"></i>
                  <p>
                    My Invoices
                    <!-- <span class="right badge badge-danger">New</span> -->
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="pages/widgets.html" class="nav-link">
                  <i class="nav-icon fas fa-th"></i>
                  <p>
                    Widgets
                    <span class="right badge badge-danger">New</span>
                  </p>
                </router-link>
              </li>
             
  
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->

</template>

<script>
    export default {
        'name': 'Header',
        data(){
            return {
                user: {
                    full_name: ''
                },
                user_image: '/static/dist/img/user2-160x160.jpg'
            }
        },
        methods: {
            logout(e){
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You will be logged out!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    // logout
                    this.$session.clear();
                    localStorage.clear();
                    Swal.fire(
                      'Logged Out!',
                      'You have been logged out.',
                      'success'
                    )
                    setTimeout(function () {
                        window.location.href = '/login';
                    }, 2000);
                  }
                })
            }
        },
        mounted(){
            // if(this.)
            if(!['/login', '/register', '/signup'].includes(this.$route.path)){
                this.user = this.$sessionUserData();
            }
            // console.log(this.user.full_name)
        },
        computed: {
            // profileImage: {
            //
            // }
        },
        watch: {
            'user.user_image': {
                handler(user_image){
                    // alert(user_image);
                    this.user_image = this.$remoteUrl+user_image;
                },
                deep: true
            }
        }
    }
</script>
