<template>
  <v-toolbar flat style="background-color:transparent">
    <v-btn class="text-xs-left" flat v-if="goBackArrow && isNotHomePage" @click="goBack">
      <v-icon large>keyboard_backspace</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn large flat>
      <h1>
        {{ datenow}}
        <span display-1 class="ml-2">{{ timenow }}</span>
      </h1>
    </v-btn>
    <v-btn large flat v-if="isNotHomePage" @click="gotoLanding">
      <v-icon large>home</v-icon>
    </v-btn>
    <v-btn large flat>
      <v-icon large>wifi</v-icon>
    </v-btn>
    <v-btn large flat>
      <v-icon large>event_note</v-icon>
    </v-btn>
    <v-btn large flat @click="closeApplication">
      <v-icon large>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import moment from "moment";
// const remote = require("electron").remote;
export default {
  name: "Header",
  props: {
    goBackArrow: {
      type: Boolean,
      default: true
    },
    isNotHomePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      datenow: "",
      timenow: ""

      // w: remote.getCurrentWindow()
    };
  },
  mounted() {
    this.interval = setInterval(this.time, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    time() {
      this.datenow = moment().format("ddd   YYYY-MM-DD");
      this.timenow = moment().format("HH:mm:ss");
    },
    gotoHome() {
      this.$router.push({ name: "home" });
    },
    gotoLanding() {
      this.$router.push({ name: "landing" });
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    closeApplication() {
      // this.w.close();
      //app.exit(0);
      alert("Exiting the Application");
    }
  }
};
</script>

<style>
</style>
