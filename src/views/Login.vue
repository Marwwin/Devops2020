<template>
<!-- VARFÖR FUNKAR EJ MIN CSS IN THIS FORM MY DUDES-->
  <div id="login">
    <div class="outer">
      <h2>Log in</h2>
       <p>Please log in with your username and password</p><br>
      <div class="box">
        <form action="login">
      Username:
        <input type="text" class="input-field" id="username" v-model="username" /><br>
      Password:
        <input type="text" class="input-field" id="password" v-model="password" /><br>
      <br>
     <div><input type="button" id="login-btn" value="Log in" @click="login" /></div> 
    </form> 
      </div>
    </div>
    <p><a href="../">Forgot your password?</a></p>
    <p><a href="../register">Register</a></p>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["info"],
  components: {},
  methods: {
    login: function () {
      const vm = this;
      fetch("http://localhost:3000/users/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      }).then((res) => res.json()).then((res) => {vm.auth = res.token;
      vm.info.auth = res.token } );
      this.$emit("auth")
    },
  },
  data: function () {
    return {
      username: "",
      password: "",
      auth: null,
    };
  },
};
</script>

<style scoped>
#login{
    margin-top: 5vh;
}


#login-btn{
   display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: #333333;
  border-radius: 10px;
  color:  rgb(223, 185, 90);
  font-weight: 400;
}

.outer{
        padding-top: 4%;
        list-style-type: none;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .box{
    display: inline-flex;
    text-align: center;
    padding: 4%;
    background-color: white;
    border: 1px solid #e6e6e6;
    border-style: solid;
    border-radius: 4%;
    }

    .input-field{
      width: 100%;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
    }
</style>