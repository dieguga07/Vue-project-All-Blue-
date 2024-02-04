<script>
import router from '@/router/router';

export default{


    props:{
      
    },

    data(){

        return{

        user: "",
        password: "",
        validPassword:false,
        validUser:false,
        userMessage: "Este campo no puede estar vacio" ,
        passwordMessage: "" ,
        } 
    },

    methods:{
       sendForm(e){
        e.preventDefault();
        this.checkPassword()
        this.checkUser()
        console.log("boton clickeado");
        if(this.validUser && this.validPassword){
          console.log("enviado");
           return router.push("/products")
           
        }
          console.log("No enviado");
       },
       checkUser(){
        if(this.user.trim() === "" ){
          console.log("user mal");
          return this.validUser = false
        }
        console.log("user bien");
        this.validUser = true
       },

       checkPassword(){
        if(this.password.trim() === "" ){
          console.log("passw mal");
          return this.validPassword = false
        }
        console.log("passw bien");
        this.validPassword = true
       }
    },

}

</script>


<template>

    <section class="contendor-login">

        <form class="login-form">
            <p class="login-title">Login</p>
        
            <div class="login-input">

                <label for="user" class="login-label">User</label>
                <input v-model="user"  type="text" id="user" name="user" required>
        
                <label for="password" class="login-label">Password</label>
                <input v-model="password"  type="password" id="password" name="password" required>
            </div>
            
            <button @click="sendForm">Login</button>
        
            <p class="login-end">Not a member yet? <router-link to="/register" class="nav-link" id="registro">Sign up now</router-link></p>

        </form>
        
    </section>

</template>
  
<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  .contendor-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9%;
    
  }

  .login-title{
    font-size: 50px;
  }
  
  .login-form {
  width: 400px;
  height: 500px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 6px 7px 40px rgba(0, 0, 0, 0.5),10px 10px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-bottom: 20px;
}

  

.login-form button{
  background-color: rgba(191, 204, 223, 1);
  width: 157px;
  height: 54px;
  border-radius: 25px; 
  font-size: 20px;
}

  .login-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    justify-content: start;
    
  }

.login-input input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    outline: none;
    padding: 5px 0;
    font-size: 16px;
}

.login-input .login-label{
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding-top: 50px;
  color:  rgba(0, 0, 0, 0.6);
}

.login-end{
padding-top: 50px;

}

.login-end a{
  color: rgba(42, 161, 185, 1);
  list-style: none;
  text-decoration: none;
}
</style>