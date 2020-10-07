<template>
<div id="head">
  <h1> <router-link to="/">TLK Quiz-night</router-link></h1>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
</div>
</template>

<script>
//import func from '../../vue-temp/vue-editor-bridge'
export default {
    name: "Header",
    props: ["info"],
}
</script>

<style scoped>
  #head{
    background-color: green ;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>