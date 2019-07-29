<template>
  <div>
    <Header />
    <br />
    <v-layout align-center justify-center row>
      <p class="pl-5 display-1 font-weight-black">{{title}}</p>
    </v-layout>

    <v-layout align-start justify-start row wrap class="pl-5 pt-5" style="height:600px">
      <v-flex v-for="item in furtherSettingsList" :key="item.name" xs3 class="text-xs-center pb-5">
        <v-btn class="square-button" :color="item.color">
          <v-flex xs3 class="button-text">
            <v-icon large dark>{{item.icon}}</v-icon>
          </v-flex>
        </v-btn>
        <h1 class="text-xs-center">{{item.name}}</h1>
      </v-flex>
    </v-layout>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "FurtherSettings",
  components: { Header, Footer },
  props: {
    title: String,
    furtherSettingsList: { type: Array }
  },
  data() {
    return {};
  },

  methods: {
    addChangePlu() {
      console.log("Add/Change");
    }
  }
};
</script>

<style scoped>
.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.square-button {
  width: 120px;
  height: 120px;
  position: relative;
  align-items: center;
}
</style>
