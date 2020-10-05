<template>
  <div class="card">
    <h5>Fråga {{currentQuestion.number}}</h5>
    <p>{{currentQuestion.question}}</p>
    <div class="answers-container mt-5">
      <p @click="checkaSvar(index)" v-bind:number="index" v-for="(answer, index) in currentQuestion.answers" :key="index" class="btn btn-outline-primary btn-lg m-3">
        <a >{{answer}}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data: function () {
    return {
      answers: [
        { number: 1, text: "yaas" },
        { number: 2, text: "qeeeen" },
      ],
    };
  },
  props:{
    currentQuestion: Object
  },
  methods:{

    checkaSvar(ans){
      this.$emit("clicked", ans);
    },
    check(inp){
      if( (Number) (inp.target.attributes[0].nodeValue) == this.currentQuestion.correct){
        alert("Correct");
      }else{
        alert("no");
      }
      
    },
    checkChild(inp){
      console.log(inp);
       if( (Number) (inp.parentElement.attributes[0].nodeValue) == this.currentQuestion.correct){
        alert("Correct");
      }else{
        alert("no");
      }
    }
  }
};
</script>