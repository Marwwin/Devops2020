<template>
  <div id="app">
    <Header />
    <!-- Skicka in en fråga till barnkomponenten -->
    <Quiz @clicked="checkaSvar" :currentQuestion="questions[current]" />
    

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Quiz from './components/Quiz.vue'


export default {
  name: 'App',
  components: {
    Header,
    Quiz,

  },
  methods:{
    checkaSvar(answered){
      alert("föräldern tog emot emmisson, " + answered);
      if(answered == this.questions[this.current].correct){
        this.current++;
      }
    },
  },
  data : function(){
    return {
      // Skapar en array med våra frågor

      questions: [
        {
          number: 1,
          question: "Hur går det",
          answers: ["Bra", "Dåligt", "Semi"],
          correct: 2
        },
        {
          number: 2,
          question: "Är 5 myror fler än fyra elefanter",
          answers: ["Ja", "Nej", "Semi"],
          correct: 0
        }
      ],
      current: 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>