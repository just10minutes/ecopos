<template>
  <div>
    <FurtherSettings :title="title" :furtherSettingsList="furtherSettingsList" />
  </div>
</template>

<script>
import FurtherSettings from "../components/FurtherSettings";

export default {
  name: "Plu",
  components: { FurtherSettings },
  data() {
    return {
      title: "PLU Settings",
      furtherSettingsList: [
        { name: "Add/Change", icon: "edit", color: "primary" },
        { name: "PLU Stock", icon: "edit", color: "primary" },
        { name: "Non PLU Codes", icon: "edit", color: "primary" },
        { name: "PREP Instructions", icon: "edit", color: "primary" }
      ]
    };
  },

  methods: {
    addChangePlu() {
      console.log("Add/Change");
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
