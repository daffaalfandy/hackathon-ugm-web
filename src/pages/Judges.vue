<template>
  <div>
    <div class="container-fluid timeline">
      <div class="col-12 text-center">
        <h1 class="timeline-title">JUDGES</h1>
      </div>
    </div>
    <div class="row custom-container">
      <img class="prize-background" src="../assets/judges-background.svg" />
      <h1 class="centered-text shine">
        TOTAL HADIAH JUTAAN RUPIAH! & SERTIFIKAT PESERTA
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("footer").classList.remove("fixed-bottom");
    document.getElementById("footer").classList.add("footer-mobile");
  },
};
</script>
