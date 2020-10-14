<template>
  <div class="quiz">

    <h4> PLAYER NAME </h4>
    <input type="text" v-model="$attrs.info.playerName" placeholder="Player Name">
    <br>
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
    }
  },
  mounted () {
    
  
  },
  methods: {
    ready(){
      this.$socket.emit('player', this.$attrs.info.playerName);
    },
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('connect', 'PING!');
    }
  },
 sockets: {
   
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;

    },

    disconnect() {
      this.isConnected = false;
      console.log(this.playerName);
      this.$socket.emit('disconnect', this.playerName);
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    },
    player(){

    }
  },
}
</script>

<style scoped>

</style>