<template>
  <div class="container-fluid shadow">
    <div class="row">
      <div class="col-lg-4 col-md-5 col-sm-12">
        <picture>
          <source srcset="../assets/education.webp" type="images/webp" />
          <source srcset="../assets/education.png" type="images/png" />
          <img
            src="../assets/education.png"
            alt="Education Image"
            class="img-theme"
          />
        </picture>
      </div>
      <div class="col-lg-8 col-md-7 col-sm-12">
        <h1 class="title-theme">Education</h1>
        <p class="subtitle-theme">
          Inovasi teknologi yang dapat membantu mahasiswa UGM dalam berbagai
          kegiatan akademik, seperti pelaksanaan perkuliahan, praktikum, dan
          penugasan kuliah.
        </p>
        <hr class="subtheme" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-5 col-sm-12">
        <picture>
          <source srcset="../assets/salth.webp" type="images/webp" />
          <source srcset="../assets/salth.png" type="images/png" />
          <img src="../assets/salth.png" alt="Salth Image" class="img-theme" />
        </picture>
      </div>
      <div class="col-lg-8 col-md-7 col-sm-12">
        <h1 class="title-theme">Salth</h1>
        <p class="subtitle-theme">
          Inovasi teknologi berbasis aplikasi atau web yang dapat mengakses
          berbagai layanan kesehatan UGM secara daring dan efisien sehingga
          meminimalisir potensi pelanggaran protokol kesehatan pada era pandemi
          COVID-19.
        </p>
        <hr class="subtheme" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-5 col-sm-12">
        <picture>
          <source srcset="../assets/entertainment.webp" type="images/webp" />
          <source srcset="../assets/entertainment.png" type="images/png" />
          <img
            src="../assets/entertainment.png"
            alt="Entertainment Image"
            class="img-theme"
          />
        </picture>
      </div>
      <div class="col-lg-8 col-md-7 col-sm-12">
        <h1 class="title-theme">Entertainment</h1>
        <p class="subtitle-theme">
          Inovasi teknologi yang dapat meningkatkan kualitas interaksi antar
          mahasiswa UGM secara daring melalui permainan atau hiburan yang dapat
          diakses bersama.
        </p>
        <hr class="subtheme" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-5 col-sm-12">
        <picture>
          <source srcset="../assets/acavices.webp" type="images/webp" />
          <source srcset="../assets/acavices.png" type="images/png" />
          <img
            src="../assets/acavices.png"
            alt="Acavices Image"
            class="img-theme"
          />
        </picture>
      </div>
      <div class="col-lg-8 col-md-7 col-sm-12">
        <h1 class="title-theme">Acavices</h1>
        <p class="subtitle-theme">
          Inovasi teknologi yang dapat memudahkan mahasiswa UGM dalam proses
          administrasi dengan kampus secara daring.
        </p>
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
