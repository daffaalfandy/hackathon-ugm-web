<template>
  <div>
    <div class="mb-5 container-fluid timeline">
      <div class="col-12 text-center">
        <h1 class="timeline-title">ABOUT US</h1>
      </div>
    </div>
    <div class="container px-5">
      <div class="row">
        <div class="col-12 mx-auto about-us mb-5">
          HACK UGM adalah sebuah kompetisi hackathon yang dikhususkan untuk
          memecahkan masalah di lingkungan UGM. HACK UGM akan memberikan
          kesempatan kepada mahasiswa UGM untuk ikut menyelesaikan permasalahan
          di lingkungan kampus lewat karya mereka di bidang teknologi. Kondisi
          pada dan pasca kenormalan baru mengubah berbagai sektor kehidupan
          termasuk sektor pendidikan, salah satunya pendidikan tinggi di UGM.
          Perkuliahan secara daring dan efeknya terhadap kesehatan menjadi salah
          satu permasalahan utama yang dialami mahasiswa UGM. Inovasi teknologi
          yang kreatif, aman, dan inklusif diperlukan dalam menghadapinya. Hasil
          dari inovasi ini diharapkan mampu menjadi langkah awal pembentukan Big
          Data di UGM.Berkaca dari situasi dan pemikiran tersebut, BEM KM UGM
          menyelenggarakan Perlombaan HACK UGM 2020 yang bertujuan untuk
          mengajak mahasiswa UGM menciptakan inovasi teknologi bertema CREATE
          YOUR OWN NORMAL. Melalui kegiatan ini diharapkan mahasiswa dapat
          menciptakan ide atau karya dan aplikasi dari mahasiswa UGM dalam
          mengatasi masalah yang terjadi di lingkup kampus UGM, mengembangkan
          potensi dan kreativitas mahasiswa, mengasah kemampuan diri dalam
          manajemen waktu dan kerja sama, serta meningkatkan kemampuan sebagai
          developer.
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
