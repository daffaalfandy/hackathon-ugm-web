<template>
  <div>
    <div class="container-fluid timeline">
      <div class="col-12 text-center">
        <h1 class="timeline-title">S & K</h1>
      </div>
    </div>
    <div class="row custom-container">
      <img class="prize-background" src="../assets/prizes-background.svg" />
      <img class="text-left prize-image" src="../assets/prize-tree.svg" />
      <h5 class="sk-text">
        1. Peserta merupakan <strong>mahasiswa aktif UGM (D4/S1)</strong> <br />
        2. Peserta merupakan tim yang beranggotakan maksimal
        <strong>3 orang</strong>, sudah
        <strong>termasuk 1 orang kapten tim</strong><br />
        3. Tim yang dibentuk memiliki nama yang dibuat masing-masing tim <br />
        4. Satu orang tidak boleh terdaftar di lebih dari 1 tim 5. Tidak ada
        ketentuan tertentu asal fakultas dalam 1 tim 6.
        <strong>Minimal 1 orang </strong>memahami programming dan teknologi
        informasi untuk membuat MVP
      </h5>
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
