<template>
  <div>
    <v-card dark>
      <v-layout align-center justify-center row>
        <p class="py-5 display-1 font-weight-black">Settings</p>
      </v-layout>
      <v-layout align-center justify-start row wrap class="pl-5">
        <v-flex v-for="item in settingsList" :key="item.name" xs2 class="text-xs-center pb-5">
          <v-btn
            class="square-button"
            :color="item.color"
            @click="gotoFurtherSettings(item.target,item.name)"
          >
            <v-flex xs2 class="button-text">
              <v-icon large dark>{{item.icon}}</v-icon>
            </v-flex>
          </v-btn>
          <h2 class="text-xs-center">{{item.name}}</h2>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Settings",
  components: { Header, Footer },
  data() {
    return {
      settingsList: [
        { name: "PLU", icon: "edit", color: "primary", target: "settingsAll" },
        { name: "Group", icon: "reorder", color: "", target: "settingsAll" },
        {
          name: "Employee",
          icon: "person",
          color: "teal",
          target: "settingsAll"
        },
        { name: "Journal", icon: "book", color: "pink", target: "settingsAll" },
        { name: "Live Sales", icon: "show_chart", color: "yellow" },
        { name: "Functions", icon: "functions", color: "blue" },
        { name: "Time Schedule", icon: "timer", color: "red" },
        {
          name: "Options",
          icon: "border_clear",
          color: "grey",
          target: "settingsAll"
        },
        { name: "Messages", icon: "message", color: "orange" },
        {
          name: "System",
          icon: "settings",
          color: "green",
          target: "settingsAll"
        },
        { name: "Administration", icon: "build", color: "purple" }
      ]
    };
  },
  methods: {
    gotoFurtherSettings(target, name) {
      this.$router.push({ name: target, params: { section: name } });
    }
  }
};
</script>

<style>
.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.square-button {
  width: 70px;
  height: 70px;
  position: relative;
  align-items: center;
}
</style>
