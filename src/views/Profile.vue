<template>
  <div class="profile">
    <h1>Welcome to your profile</h1>
    <!---<div v-html="JSON.parse(json)"></div>-->
    <vue-json-pretty
      id="jspretty"
      v-if="renderOK"
      :data="json"
      :path="path"
      :deep="deep"
      :show-double-quotes="showDoubleQuotes"
      :highlight-mouseover-node="highlightMouseoverNode"
      :highlight-selected-node="highlightSelectedNode"
      :show-length="showLength"
      :show-line="showLine"
      :select-on-click-node="selectOnClickNode"
      :collapsed-on-click-brackets="collapsedOnClickBrackets"
      v-model="value"
      :selectable-type="selectableType"
      :show-select-controller="showSelectController"
      :custom-value-formatter="
        useCustomLinkFormatter ? customLinkFormatter : null
      "
      @click="handleClick(...arguments, 'complexTree')"
      @change="handleChange"
    >
    </vue-json-pretty>
  </div>
</template>


<script type="text/javascript">
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
export default {
  name: "Profile",
  components: {
    VueJsonPretty,
  },
  
  watch: {
    selectableType(newVal) {
      this.renderOK = false;
      if (newVal === "single") {
        this.value = "res.error";
      } else if (newVal === "multiple") {
        this.value = ["res.error", "res.data[0].title"];
      }
      this.$nextTick(() => {
        this.renderOK = true;
      });
    },
  },
  methods: {
    handleClick(path, data, treeName = "") {
      console.log("click: ", path, data, treeName);
      this.itemPath = path;
      this.itemData = !data ? data + "" : data;
    },
    handleChange(newVal, oldVal) {
      console.log("newVal: ", newVal, " oldVal: ", oldVal);
    },
  },

  data() {
    return {
      
      json: 
      
      fetch(
        "https://ejbi8heuue.execute-api.eu-west-2.amazonaws.com/default/myLambdaa?bucket=rickrollingbucket&file=questions.json"
      )
        .then((r) => r.json())
        .then((json) => {
          this.json = json;
        }),
      value: "res.error",
      selectableType: "single",
      showSelectController: false,
      showLength: false,
      showLine: false,
      showDoubleQuotes: true,
      highlightMouseoverNode: true,
      highlightSelectedNode: true,
      selectOnClickNode: true,
      collapsedOnClickBrackets: true,
      useCustomLinkFormatter: false,
      path: "res",
      deep: 2,
      itemData: {},
      itemPath: "",
      renderOK: true
    };
  },
  created() {
    this.val = JSON.stringify(this.json);
  },
  
  
};
</script>

<style scoped>
#jspretty {
  margin-left: 20%;
  text-align: left;
}
</style>