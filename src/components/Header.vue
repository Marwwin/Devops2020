<template>
<div id="head">
  <div class="side" id="dummy"></div>
  <h1><router-link to="/">TLK Quiz-night</router-link></h1>
   <div class="side" id="orig"> <router-link to="/register" class="link">Register</router-link>
    <router-link class="link" to="/login">Login</router-link></div>
</div>
</template>

<script>
//import func from '../../vue-temp/vue-editor-bridge'
export default {
    name: "Header",
    props: ["info"],
    mounted() {
      const orig = document.getElementById("orig");
      const dummy = document.getElementById("dummy");
      dummy.style.width = orig.offsetWidth +"px";
    }
}
</script>


<style scoped>
  #head{
    background-color: green ;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.side{
  margin:1em
}
.link{
  margin:1em
}


</style>