<template>
  <v-app class="grey darken-2">
    <v-container fluid px-5 py-4>
      <div id="app" px-5 class="grey lighten-2">
        <transition name="router-anim" enter-active-class="animated zoomIn">
          <router-view />
        </transition>
      </div>
    </v-container>
  </v-app>
</template>
<script>
import Footer from "./components/Footer";
export default {
  components: {
    Footer
  }
};
</script>
<style>
/* @import "./assets/animate.css"; */
#app {
  min-height: 100%;
}
</style>
