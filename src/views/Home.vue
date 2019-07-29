<template>
  <div>
    <!-- This is Popup Place holder -->
    <v-layout justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">{{accessStatus}}</v-card-title>
          <v-card-text>{{accessMessage}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="gotoLanding" color="green darken-1" text>OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- Popup Place holder finished -->
    <!-- Header component -->
    <Header :isNotHomePage="isNotHomePage" />
    <!-- Page content start -->
    <v-layout align-center justify-start row>
      <p class="pl-5 display-1 font-weight-black">WELCOME !!!</p>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm9 md5 lg5 class="px-5">
        <v-layout row wrap align-center justify-center>
          <input
            :value="input"
            @input="onInputChange"
            class="input"
            placeholder="Please Enter Your Password"
            type="password"
          />
          <SimpleKeyboard
            @onChange="onChange"
            @onKeyPress="onKeyPress"
            :display="display"
            :input="input"
            :layout="layout"
          />
        </v-layout>
      </v-flex>
      <v-layout align-end justify-center>
        <v-flex xs7>
          <v-layout row align-center justify-center>
            <v-img :src="require('../assets/logo.png')" max-height="200" max-width="200"></v-img>
          </v-layout>
          <v-layout row align-center justify-end>
            <v-img :src="require('../assets/logoname.png')"></v-img>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
    <!-- Page content end -->
    <Footer />
  </div>
</template>

<script>
import SimpleKeyboard from "../components/SimpleKeyboard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: { SimpleKeyboard, Header, Footer },
  data() {
    return {
      input: "",
      dialog: false,
      goBackArrow: false,
      isNotHomePage: false,
      accessStatus: "",
      accessMessage: "",
      grantAccess: false,
      display: {
        "{bksp}": "<<",
        "{enter}": "enter",
        "{shift}": "shift",
        "{clear}": "clear"
      },
      layout: {
        default: ["1 2 3", "4 5 6", "7 8 9", "{clear} 0 {bksp}", "{enter}"]
        // shift: ["! / #", "$ % ^", "& * (", "{shift} ) +", "{bksp}"]
      }
    };
  },
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
      if (button === "{clear}") this.clearMyInput();
      if (button === "{enter}") this.myInputValue();
    },
    onInputChange(input) {
      this.input = input.target.value;
    },
    myInputValue() {
      console.log("Enter Pressed");
      console.log(this.input);
      if (this.input === "1111") {
        this.dialog = true;
        this.accessStatus = "Access Granted :)";
        this.grantAccess = true;
        this.input = "";
      } else {
        this.dialog = true;
        this.accessStatus = "Access Not Granted !!!!";
        this.grantAccess = false;
        this.input = "";
      }
    },
    clearMyInput() {
      console.log("Clear entered");
      this.input = "";
    },
    gotoLanding() {
      if (this.grantAccess) {
        this.dialog = false;
        this.$router.push({ name: "landing" });
      } else {
        this.dialog = false;
      }
    }
  }
};
</script>

<style>
input {
  width: 90%;
  height: 100px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
  background: lightgrey;
  border-radius: 10px;
}

.simple-keyboard {
  max-width: 850px;
  width: 90%;
}
.simple-keyboard.hg-theme-default.hg-layout-numeric .hg-button {
  /* background: #424242; */
  /* font-size: 22px; */
  width: 33%;
  height: 90px;
  border: 1px solid #a8c1d5;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-size: 36px;
  font-family: arial, helvetica, sans-serif;
  padding: 10px 10px 10px 10px;
  text-decoration: none;
  /* display: inline-block; */
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);
  font-weight: bold;
  color: #ffffff;
  background-color: #cedce7;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#cedce7),
    to(#596a72)
  );
  background-image: -webkit-linear-gradient(top, #cedce7, #596a72);
  background-image: -moz-linear-gradient(top, #cedce7, #596a72);
  background-image: -ms-linear-gradient(top, #cedce7, #596a72);
  background-image: -o-linear-gradient(top, #cedce7, #596a72);
  background-image: linear-gradient(to bottom, #cedce7, #596a72);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#CEDCE7, endColorstr=#596a72);
}
.simple-keyboard.hg-theme-default.hg-layout-numeric .hg-button:hover {
  border: 1px solid #8aabc5;
  background-color: #acc4d6;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#acc4d6),
    to(#434f55)
  );
  background-image: -webkit-linear-gradient(top, #acc4d6, #434f55);
  background-image: -moz-linear-gradient(top, #acc4d6, #434f55);
  background-image: -ms-linear-gradient(top, #acc4d6, #434f55);
  background-image: -o-linear-gradient(top, #acc4d6, #434f55);
  background-image: linear-gradient(to bottom, #acc4d6, #434f55);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#acc4d6, endColorstr=#434f55);
}
</style>
