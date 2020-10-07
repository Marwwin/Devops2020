<template>
    <div class="home">

        <h1>QUIZ APP F*CK YEAH!!!!</h1>
    <div id="quiz-btn-container">
         <router-link to="/quiz"> <div id="quiz-btn"> QUIZ IT UP!!! </div> </router-link>
    </div>
    </div>
</template>

<script>



export default {
     name: 'App',
     props: ["info"],
  components: {
 
  },data: function(){
      return {
          isRegister:false,
          isLogin: false
      }
  },
}
</script>

<style scoped>
#quiz-btn-container{
    display: flex;
    justify-content: center;
}
#quiz-btn {
    padding: 2em;
    background-color: rebeccapurple;
    border-radius: 10px;
}
</style>
