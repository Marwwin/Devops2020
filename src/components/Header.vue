<template>
  <div id="head">
    <div class="side" id="dummy"></div>
    <div>
      <router-link v-if="this.$attrs.auth" to="/admin">
      <img src="../assets/qoiz_logo_transparent.png" id="logo">
       </router-link>
      <router-link v-else to="/" >
      <img src="../assets/qoiz_logo_transparent.png" id="logo">    
      </router-link>
      </div>
    <div class="side" id="orig">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/register" class="link">Register</router-link>
      <router-link class="link" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
//import func from '../../vue-temp/vue-editor-bridge'
export default {
  name: "Header",
  props: ["info","auth"],
  mounted() {
    const orig = document.getElementById("orig");
    const dummy = document.getElementById("dummy");
    dummy.style.width = orig.offsetWidth + "px";
  },
};
</script>


<style scoped>
#head {
  background-color: steelblue;
  color: darkgoldenrod;
  
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.side {
  margin: 1em;
}
.link {
  margin: 1em;
  color: rgb(223, 185, 90);
  font-weight: bold;
  font-size: x-large;
  text-decoration: none;
}
.link:hover{
  margin: 1em;
  color: darkgoldenrod;
  font-weight: bold;
  font-size: x-large;
}
#logo{
  max-height: 10vh;
}
</style>