<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Profile</h1>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img
                    class="profile-user-img img-fluid img-circle"
                    src="/static/dist/img/user4-128x128.jpg"
                    alt="User profile picture"
                  />
                </div>

                <h3 class="profile-username text-center">
                  {{ user.full_name }}
                </h3>

                <p class="text-muted text-center">Software Engineer</p>

                <!-- <ul class="list-group list-group-unbordered mb-3">
                    <li class="list-group-item">
                      <b>Followers</b> <a class="float-right">1,322</a>
                    </li>
                    <li class="list-group-item">
                      <b>Following</b> <a class="float-right">543</a>
                    </li>
                    <li class="list-group-item">
                      <b>Friends</b> <a class="float-right">13,287</a>
                    </li>
                  </ul> -->

                <!-- <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a> -->
              </div>
            </div>
            <div class="card card-primary">
              <div class="card-header"></div>
              <div class="card-body">
                <hr />
                <hr />
                <hr />
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#activity"
                      data-toggle="tab"
                      >Agenda</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#timeline" data-toggle="tab"
                      >Stylist</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#settings" data-toggle="tab"
                      >Iets</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#mail" data-toggle="tab">Mail</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#afspraken" data-toggle="tab"
                      >Afspraken</a
                    >
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <div class="tab-pane" id="mail">
                      <h3>Mail list</h3>
                    </div>
                    <div class="tab-pane" id="afspraken">
                      <h5>afspraken lijst</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Profile",
      user: {
        full_name: "",
      },
    };
  },
  mounted() {
    // if(this.)
    if (!["/login", "/register", "/signup"].includes(this.$route.path)) {
      this.user = this.$sessionUserData();
    }
    // console.log(this.user.full_name)
  },
};
</script>
