<template>
  <div id="register">

    <div class="outer">
      <h2>Register</h2>
      <p>Please fill out the following information and start to play!</p>
      <br />
      <div class="box">
        <form action="register">
          Username:
          <input type="text" class="input-field" id="username" v-model="username"
          /><br />
          Password:
          <input type="text" class="input-field" id="password" v-model="password"
          /><br />
          <br />
          <div>
            <input type="button" id="register-btn" value="Register" @click="register" />
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Register',
  props: ["info"],
  components: {
      
  },
  methods:{
      register: function(){
         
          console.log(JSON.stringify({username:this.username,password:this.password}));
         fetch("https://qoiz.azurewebsites.net:8080/users/signup/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username:this.username,password:this.password})}).then((res)=>{if (res.statusText == "Created"){alert("User "+this.username+" Created")}})
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

#register{
    margin-top: 5vh;
}


#register-btn {
  display: inline-flex;

  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: #333333;
  border-radius: 10px;

  color: rgb(223, 185, 90);
  font-weight: 400;
}

.outer {
  padding-top: 4%;
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}
.box {
  display: inline-flex;
  text-align: center;
  padding: 4%;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-style: solid;
  border-radius: 4%;
}

.input-field {
  width: 100%;

  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;

}


</style>