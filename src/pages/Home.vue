<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid mb-0" id="main-jumbotron">
      <h1 class="custom-title" id="main-title">HACK UGM</h1>
    </div>

    <!-- Content -->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="creativity fade-in">Bring Your Creativity Here!</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="creativity-subtitle">
            Kondisi pada dan pasca kenormalan baru mengubah berbagai sektor
            kehidupan termasuk sektor pendidikan, salah satunya pendidikan
            tinggi di UGM. Perkuliahan secara daring dan efeknya terhadap
            kesehatan menjadi salah satu permasalahan utama yang dialami
            mahasiswa UGM. Maka dari itu, inovasi teknologi yang kreatif, aman,
            dan inklusif diperlukan dalam menghadapinya. HACKUGM dengan tema
            CREATE YOUR OWN NORMAL hadir sebagai wadah kreativitas kalian!
            Bersama kita selesaikan masalah yang ada di sekitar, jangan sampai
            ide kreatif terhenti di kamu!
          </p>
        </div>
      </div>
    </div>
    <img
      src="../assets/footer-img.svg"
      class="mb-0 pb-0"
      style="width: 100%"
      alt="Footer Image"
    />
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
