<template>
  <div class="div">
    <div class="container-fluid timeline mb-4">
      <div class="col-12 text-center">
        <h1 class="timeline-title">SPONSOR</h1>
      </div>
    </div>
    <div class="container">
      <div class="row my-5 text-center">
        <div class="col-lg-4 col-sm-6 my-3">
          <img src="../assets/logo-1.png" alt="Sponsor Logo" />
        </div>
        <div class="col-lg-4 col-sm-6 my-3">
          <img src="../assets/logo-2.png" alt="Sponsor Logo" />
        </div>
        <div class="col-lg-4 col-sm-6 my-3">
          <img src="../assets/logo-3.png" alt="Sponsor Logo" />
        </div>
        <div class="col-lg-6 col-sm-12 my-3">
          <img
            src="../assets/logo-4.png"
            class="long-logo"
            alt="Sponsor Logo"
          />
        </div>
        <div class="col-lg-6 col-sm-12 my-3">
          <img
            src="../assets/logo-5.png"
            class="long-logo"
            alt="Sponsor Logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("footer").classList.remove("fixed-bottom");
    document.getElementById("footer").classList.remove("footer-mobile");
  },
};
</script>