<template>
  <div>
    <header-vue></header-vue>
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
};
</script>
