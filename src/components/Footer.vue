<template>
  <footer class="text-light footer fixed-bottom" id="footer">
    <div class="container px-5">
      <div class="row">
        <div class="col-6 mt-3 text-left">
          <p class="footer-subtitle text-left mb-2">Powered by</p>
          <h1 class="footer-title-logo text-left mb-4">HACK UGM</h1>
          <p class="footer-subtitle mb-2">Organized by</p>
          <h1 class="footer-title text-left">BEM KM UGM</h1>
        </div>
        <div class="col-6 mt-3 float-left">
          <div class="vertical-footer">
            <h5 class="vertical-title text-left mb-1 pb-0">Quick Links</h5>
            <router-link to="/about" tag="a" class="vertical-menu mb-0 pb-0">About Us</router-link>
            <router-link to="/faq" tag="a" class="vertical-menu mb-0 pb-0">FAQ</router-link>
            <router-link tag="a" to="/sponsor" class="vertical-menu mb-0 pb-0">Sponsor</router-link>
            <a
              href="https://drive.google.com/drive/u/0/folders/1LD2a38SdPn-AGjf1CnsHCJ_Iqs4l2kB6"
              target="_blank"
              class="vertical-menu mb-0 pb-0"
            >Guidebook</a>
            <a href="https://www.instagram.com/bemkm_ugm/" target="_blank">
              <img
                src="../assets/instagram-icon.svg"
                class="footer-icon vertical-menu mb-0 pb-0"
                alt="Instagram Icon"
              />
              <span class="ml-2" style="color: black; font-size: 0.7em;">bemkm_ugm</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr style="border-width: 2px; background-color: #000000;" class="desktop-view" />
    <div class="row mt-3 pb-3 mx-auto">
      <div class="col-lg-6 col-md-6 col-12 logo-wrap">
        <img class="footer-logo first-footer-logo" src="../assets/ugm-logo.svg" />
        <picture>
          <source srcset="../assets/bem-logo.webp" type="images/webp" />
          <source srcset="../assets/bem-logo.png" type="images/png" />
          <img class="footer-logo ml-5" src="../assets/bem-logo.png" />
        </picture>
        <picture>
          <source srcset="../assets/logo.webp" type="images/webp" />
          <source srcset="../assets/logo.png" type="images/png" />
          <img class="footer-logo ml-5" src="../assets/logo.png" />
        </picture>
      </div>
      <div class="col-lg-6 col-md-6 col-12 mt-3">
        <p class="text-copyright">Copyright &#169; 2020 All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
