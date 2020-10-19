<template>
  <div class="home">
    <h1>QUIZ APP F*CK YEAH!!!!</h1>
    <div id="quiz-btn-container">
      <router-link to="/profile">
        <div id="quiz-btn">SHOW THAT JSON</div>
      </router-link>
    </div>
    
<div class="row">
  <div class="column">
    <h2>Register</h2>
    <p>Create your account now!</p>
  </div>
  <div class="column" >
    <h2>Log in</h2>
    <p>Log in to your accout.</p>
  </div>
  <div class="column" >
    <h2>Start to play!</h2>
    <p>And enjoy fun quiz games with your friends!</p>
  </div>
</div>

    <div id="quiz-btn-container">
      <router-link to="/quiz">
        <div id="quiz-btn">QUIZ IT UP!!!</div>
      </router-link>
    </div>
    <Admin v-if="this.info.type == 'admin'" :info="info" ></Admin>
  </div>
</template>

<script>
import Admin from './Admin'

export default {
  name: "App",
  props: ["info"],
  components: {
    Admin
  },
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

h1{
font-size: 100px;  
font-weight: 400;
}
p{
  font-size: 20px;
}

h2{
  font-size: 50px;
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

.column {
   box-sizing: border-box;
  float: left;
  width: 33.33%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
