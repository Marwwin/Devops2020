<template>
  <div id="app">
    
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
   Header,
   Footer
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

/* latin-ext */
@font-face {
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: local('Overpass ExtraLight'), local('Overpass-ExtraLight'), url(https://fonts.gstatic.com/s/overpass/v5/qFdA35WCmI96Ajtm81lqcs7D4howig.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: local('Overpass ExtraLight'), local('Overpass-ExtraLight'), url(https://fonts.gstatic.com/s/overpass/v5/qFdA35WCmI96Ajtm81lqcs7N4ho.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
#app {
  font-family: Overpass,sans-serif ;
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