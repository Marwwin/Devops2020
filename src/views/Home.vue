<template>
  <div class="home">
    <h1>QUIZ APP F*CK YEAH!!!!</h1>
    <p>Hello quiz </p>
    <div id="quiz-btn-container">
      <router-link to="/quiz">
        <div id="quiz-btn">QUIZ IT UP!!!</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["info"],
  components: {},
  data: function () {
    return {
      isRegister: false,
      isLogin: false,
    };
  },
};
</script>

<style scoped>
.home {
  margin-top: 5vh;
}
#quiz-btn-container {
  display: flex;
  justify-content: center;
}
#quiz-btn {
  padding: 2em;
  color: darkgoldenrod;
  font-weight: bolder;
  background-color: darkslateblue;
  border-radius: 10px;
}
</style>
