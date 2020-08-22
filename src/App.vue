<template>
  <div>
    <header-vue></header-vue>
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  components: {
    "header-vue": Header,
    "footer-vue": Footer,
  },
  mounted() {
    console.log("Created By: Daffa Alfandy, Abyan Ahmad");
  },
};
</script>
