<template>
  <div id="app">
    <Header :auth=true />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
    checkaSvar(answered) {
      alert("föräldern tog emot emmisson, " + answered);
      if (answered == this.questions[this.current].correct) {
        this.current++;
      }
    },
  },
  data: function () {
    return {
      
    };
  },
};
</script>

<style>
/* latin-ext */
@import url("https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Roboto:wght@100&display=swap");
#app {
  font-family: Overpass, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 4px;
  font-size: 2.5vh;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: white;
}

#nav a {
  margin: 15px;
}
</style>