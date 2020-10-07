<template>
  <div id="app">
    
    <Header />
    <router-view/>

  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
   Header
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

#nav a{
  margin: 15px;
}
</style>