<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <!-- <li class="nav-item">
        <router-link
          class="nav-link"
          data-widget="pushmenu"
          to="#"
          role="button"
          ><i class="fas fa-bars"></i
        ></router-link>
      </li> -->
      <li class="nav-item d-none d-sm-inline-block">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link to="/profile" class="nav-link">Dashboard 2</router-link>
      </li>
            <li class="nav-item d-none d-sm-inline-block">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
     
      <li class="nav-item">
        <router-link
          class="nav-link"
          data-widget="fullscreen"
          to="#"
          role="button"
        >
          <i class="fas fa-expand-arrows-alt"></i>
        </router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link class="nav-link" data-toggle="dropdown" to="#">
          <i
            ><div class="media">
              <img
                :src="user_image"
                alt="User Avatar"
                class="img-size-50 mr-3 img-circle"
              /></div
          ></i>
          <!-- <i class="far fa-user fa-2x"></i> -->
          <!-- <span class="badge badge-danger navbar-badge">3</span> -->
        </router-link>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <router-link to="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <div class="media-body">
                <h3 class="dropdown-item-title text-center">
                  <router-link to="/profile" class="text-center"
                    >Profile</router-link
                  >
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
        </div>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  
   

  <!-- Content Wrapper. Contains page content -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        full_name: "",
      },
      user_image: "/static/dist/img/user2-160x160.jpg",
    };
  },
  methods: {
    logout(e) {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          // logout
          this.$session.clear();
          localStorage.clear();
          Swal.fire("Logged Out!", "You have been logged out.", "success");
          setTimeout(function () {
            window.location.href = "/login";
          }, 2000);
        }
      });
    },
  },
  mounted() {
    // if(this.)
    if (!["/login", "/register", "/signup"].includes(this.$route.path)) {
      this.user = this.$sessionUserData();
    }
    // console.log(this.user.full_name)
  },
  computed: {
    // profileImage: {
    //
    // }
  },
  // watch: {
  //   "user.user_image": {
  //     handler(user_image) {
  //       // alert(user_image);
  //       this.user_image = this.$remoteUrl + user_image;
  //     },
  //     deep: true,
  //   },
  // },
};
</script>
