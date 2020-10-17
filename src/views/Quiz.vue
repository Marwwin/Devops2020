<template>
  <div class="quiz">

    <h1 id="textrender">Let's Start!</h1>
    <h2>{{this.socketMessage}}</h2>
    <h4> PLAYER NAME </h4>
    <input type="text" v-model="$attrs.info.playerName" placeholder="Player Name">
    <br>
    <p v-if="privateMsg">Message from Admin: {{this.privateMsg}}</p>
    <button v-on:click="ready">Ready For Quizzing</button> 
  </div>
</template>


<script>
/*function renderTag(test) {
  
  return test;
}
//Unit Testing//
desscribe('Render a h1 title', () =>{
  it('render specific h1', () =>{
    //arrange
    let render = false;
    //act
    const result = renderTag(test);
  
    //assert
    expect(result).toBe(render);
  })
});*/

export default {
  name:'Quiz',
  data() {
    return {
      isConnected: false,
      socketMessage: '',
      privateMsg: '',
    }
  },
  mounted () {
    
  
  },
  methods: {
    ready(){
      this.$socket.emit('newplayer', this.$attrs.info.playerName);
    },
  },
 sockets: {
   
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;

    },

    disconnect() {
      this.$socket.emit('disconnect',this.$attrs.info.playerName); // This probably does nothing
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    },
    private(data){
      this.privateMsg = data;
    }
    
  },
}
</script>

<style scoped>
#register-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 13vw;
  height: 10vh;
  background-color: #333333;
  border-radius: 10px;
  color: rgb(223, 185, 90);
  font-weight: 400;
}

.input-field {
  width: 20vw;
  height: 10vh;
  text-align: center;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
}


</style>