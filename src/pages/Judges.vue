<template>
  <div>
    <div class="container-fluid timeline">
      <div class="col-12 text-center">
        <h1 class="timeline-title">JUDGES</h1>
      </div>
    </div>
    <div class="container">
      <div class="row mb-5 text-center">
        <div class="col-lg-4 col-md-6">
          <img src="../assets/christoper-farrel.jpeg" style="border-radius: 50%" alt="Judge Photos" />
          <h4 class="ml-0 text-title mt-4 mb-3">Christoper Farrel Millenio Kusuma</h4>
          <p class="text-desc">CEO Kecilin.id & Angel Investor</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <img src="../assets/hibatul-ghazi.jpeg" style="border-radius: 50%" alt="Judge Photos" />
          <h4 class="ml-0 text-title mt-4 mb-3">Hibatul Ghazi Zulhasmi</h4>
          <p class="text-desc">Mapres 1 UGM 2019</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <img src="../assets/fadhlan-hawali.jpeg" style="border-radius: 50%" alt="Judge Photos" />
          <h4 class="ml-0 text-title mt-4 mb-3">Fadhlan Hawali, S.T.</h4>
          <p class="text-desc">PM MeetingYuk</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <img src="../assets/ahmad-fauzi.jpeg" style="border-radius: 50%" alt="Judge Photos" />
          <h4 class="ml-0 text-title mt-4 mb-3">Ahmad Fauzi Wibowo</h4>
          <p class="text-desc">
            Software Engineer Intern Tokopedia
            <br />Head of mobile apps -Division Omah TI 17/18
          </p>
        </div>
        <div class="col-lg-4 col-md-6">
          <img src="../assets/helmi-hafiyyan.jpeg" style="border-radius: 50%" alt="Judge Photos" />
          <h4 class="ml-0 text-title mt-4 mb-3">Helmi Hafiyyan Sujudi</h4>
          <p class="text-desc">
            Menteri Koordinator Kemahasiswaan BEM KM UGM 2019
            <br />Best Text Innovation MPIC 2019
          </p>
        </div>
        <div class="col-lg-4 col-md-6">
          <img src="../assets/wisnu-kurniawan.jpeg" style="border-radius: 50%" alt="Judge Photos" />
          <h4 class="ml-0 text-title mt-4 mb-3">Wisnu Kurniawan</h4>
          <p class="text-desc">Software Engineer Bahasa.ai</p>
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
