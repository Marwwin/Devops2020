<template>
  <div id="register">
    <h2>REGISTER</h2>

    <form action="register">
      Username:
      <input type="text" id="username" v-model="username"/>
      Password:
      <input type="text" id="password" v-model="password"/>
      <input type="button" value="Register" @click="register" />
    </form>
  </div>
</template>

<script>

export default {
  name: 'Register',
  components: {
      
  },
  methods:{
      register: function(){
         
          console.log(JSON.stringify({username:this.username,password:this.password}));
         fetch("http://localhost:3000/users/signup/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username:this.username,password:this.password})}).then((res)=>console.log(res))
      }
      
  },
  data : function(){
    return {
      username: '',
      password: '',
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>