<template>
  <div>
    <FurtherSettings
      :title="requiredSettingsList[0].sectionTitle"
      :furtherSettingsList="requiredSettingsList[0].sectionSettings"
    />
  </div>
</template>

<script>
import FurtherSettings from "../components/FurtherSettings";

export default {
  name: "SettingsAll",
  components: { FurtherSettings },
  data() {
    return {
      requiredTitle: "Hello",
      furtherSettingsList: [
        {
          section: "PLU",
          sectionTitle: "PLU Settings",
          sectionSettings: [
            { name: "Add/Change", icon: "edit", color: "primary" },
            { name: "PLU Stock", icon: "edit", color: "primary" },
            { name: "Non PLU Codes", icon: "edit", color: "primary" },
            { name: "PREP Instructions", icon: "edit", color: "primary" }
          ]
        },
        {
          section: "Group",
          sectionTitle: "Group Settings",
          sectionSettings: [
            { name: "Main Group", icon: "reorder", color: "" },
            { name: "Sub Group", icon: "reorder", color: "" }
          ]
        },
        {
          section: "Employee",
          sectionTitle: "Employee Settings",
          sectionSettings: [
            { name: "Add/Edit Employee", icon: "person", color: "teal" },
            { name: "Manage Roles", icon: "person", color: "teal" }
          ]
        },
        {
          section: "Journal",
          sectionTitle: "Journal Settings",
          sectionSettings: [
            { name: "Add/Edit Journal", icon: "book", color: "pink" }
          ]
        },
        {
          section: "Options",
          sectionTitle: "Options",
          sectionSettings: [
            { name: "General", icon: "border_clear", color: "grey" },
            { name: "Print Options", icon: "border_clear", color: "grey" },
            {
              name: "Kitchen Print Options",
              icon: "border_clear",
              color: "grey"
            },
            { name: "Tax Options", icon: "border_clear", color: "grey" },
            { name: "Report Options", icon: "border_clear", color: "grey" },
            { name: "PREP Instructions", icon: "border_clear", color: "grey" }
          ]
        },
        {
          section: "System",
          sectionTitle: "System Settings",
          sectionSettings: [
            { name: "Port/Device", icon: "settings", color: "green" },
            { name: "Network", icon: "settings", color: "green" },
            {
              name: "Import/Export",
              icon: "settings",
              color: "green"
            },
            { name: "Labels", icon: "settings", color: "green" },
            { name: "Roundings", icon: "settings", color: "green" },
            { name: "Backup", icon: "settings", color: "green" },
            { name: "Licencing", icon: "settings", color: "green" },
            { name: "Scan Data", icon: "settings", color: "green" }
          ]
        }
      ]
    };
  },
  computed: {
    requiredSettingsList: function() {
      //console.log(this.$route.params);
      let val = this.$route.params.section;
      if (!val) {
        val = "PLU";
      }
      return this.furtherSettingsList.filter(function(item) {
        return item.section === val;
      });
    }
  },
  //   mounted() {
  //     console.log(this.requiredSettingsList[0].section);
  //   },

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
