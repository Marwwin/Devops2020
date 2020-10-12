<template>
  <div class="admin">
    <h1>This is an admin page</h1>
      <div>
      <h3>Add new question</h3>
  
      <p>Question</p>
      <input type="text" v-model="question" name="question" id="question">
      <p>Answers</p>
      <input type="text" v-model="ans" name="answer" id="answer">
      <button v-on:click="addAnswer">+</button>
      <ul v-if="answers">
        <li v-for="ans in answers" :key="ans.id">{{ans.data}}</li>
      </ul>
      <p>Time (default 15) </p>
      <input type="number" v-model="time" value="15" name="time" id="time"> 
      <br>
      <p>Value points</p>
      <input type="number" v-model="valuepoints" value="1" name="value" id="value">
      <br>
      <input type="button" value="SAVE QUESTION" v-on:click="saveQuestion">
      </div>
      <div id="addquizes">
        <h3>Make a new Quiz</h3>
        <p>Name of quiz</p>
        <input type="text" v-model="quizName">
        <p>Add questions</p>
        <div id="listofquizes-holder">
        <ul id="listofquizes">
          <li v-for="q in questions" :key="q.id">
            <input type="checkbox" name="" id=""> Question: {{q.question}} Answers: {{q.correctAnswers}}
          </li>
        </ul>

        </div>

        <button>Save quiz</button>
      </div>


  </div>
</template>


<script>
export default {
    name: "Admin",
    methods: {
      saveQuestion: function(){

        const vm = this;

        fetch("http://localhost:3000/questions/", {
        method: "POST",
        headers: {
          Authorization: this.$attrs.info.auth,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question:vm.question,
          correctAnswers:vm.answers,
          questionValue: vm.valuepoints,
          answerTime: vm.time})}).then((res)=>console.log(res))
      }
      ,
      addAnswer: function(){
        this.answers.push({
          id:this.answers.length,
          data:this.ans
          });
        this.ans = null 
      }
    },
    mounted(){
        fetch("http://localhost:3000/questions/").
          then((res) => res.json()).
          then((res) => {this.questions = res; console.log(res)});
    },
    data: function () {
    return {
      ans: null,
      answers: [],
      time: 15,
      valuepoints: 1,
      question: null,
      questions: [],
      quizName: null,
    };
  },
}
</script>

<style scoped>
#listofquizes-holder{
  display: flex;
  justify-content: center;
}
#listofquizes{
  display:flex;
	flex-direction: column;
	align-items: baseline;
  
}
#addquizes{
  margin: 5em
}
</style>