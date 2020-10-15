<template>
  <div class="quiz">
    <h2>{{this.socketMessage}}</h2>
    <h4> PLAYER NAME </h4>
    <input type="text" v-model="$attrs.info.playerName" placeholder="Player Name">
    <br>
    <p v-if="privateMsg">Message from Admin: {{this.privateMsg}}</p>
    <button v-on:click="ready">Ready For Quizzing</button> 
  </div>
</template>

<script>

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
      this.$socket.emit('disconnect',this.$attrs.info.playerName)
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

</style>