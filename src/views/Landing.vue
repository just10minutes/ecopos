<template>
  <div>
    <Header />
    <br />
    <v-layout align-center justify-center row wrap pt-5>
      <v-flex v-for="item in menuList" :key="item.name" xs3 class="text-xs-center pb-5">
        <v-btn @click="gotoNext(item.target)" :color="item.color" class="round-button">
          <v-flex xs3 class="button-text">
            <v-icon large dark>{{item.icon}}</v-icon>
          </v-flex>
        </v-btn>
        <h1 class="text-xs-center">{{item.name}}</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap align-end justify-end style="padding-top:300px">
      <v-img :src="require('../assets/logofull.png')" contain max-height="100"></v-img>
    </v-layout>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Settings from "@/components/Settings";
export default {
  name: "Landing",
  components: {
    // Settings,
    Header,
    Footer
  },
  data() {
    return {
      // showSettingsPage: false
      menuList: [
        {
          name: "Sales",
          icon: "assignment",
          color: "primary",
          target: ""
        },
        {
          name: "Reports",
          icon: "timeline",
          color: "pink",
          target: ""
        },
        {
          name: "Favourites",
          icon: "favorite",
          color: "indigo",
          target: ""
        },
        {
          name: "Settings",
          icon: "settings",
          color: "teal",
          target: "settings"
        }
      ]
    };
  },

  methods: {
    showSettings() {
      // this.showSettingsPage = true;
      this.$router.push({ name: "settings" });
    },
    gotoNext(target) {
      this.$router.push({ name: target });
    }
  }
};
</script>

<style scoped>
@import "../assets/animate.css";
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.round-button {
  width: 120px;
  height: 120px;
  position: relative;
  border-radius: 50%;
}
</style>
