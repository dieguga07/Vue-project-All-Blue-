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
        userMessage: "" ,
        passwordMessage: "" ,
        } 
    },

    methods:{
       sendForm(e){
        e.preventDefault()

        this.checkPassword()

        this.checkUser()

        if(this.validUser && this.validPassword){
         
           return router.push("/products")
           
        }
          
       },

       checkUser(){
        if(this.user.trim() === "" ){
          
          this.userMessage = "Este campo no puede estar vacio"
          return this.validUser = false
        }else if(this.user.length < 4 ){
          this.userMessage = "El nombre del usuario de estar compuesto por 4 letras o mas"
          return this.validUser = false
        }
        this.userMessage = "Todo OK"
        this.validUser = true
       },

       checkPassword(){
        if(this.password.trim() === "" ){
          this.passwordMessage = "Este campo no puede estar vacio"
          return this.validPassword = false
        }
        this.passwordMessage = "Todo OK"
        this.validPassword = true
       }
    }, 
    watch: {
    user: function () {
      this.checkUser();
    },

    password: function () {
      this.checkPassword();
    },

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
                <p :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</p>
        
                <label for="password" class="login-label">Password</label>
                <input v-model="password"  type="password" id="password" name="password" required>
                <p  :class=" validPassword ? 'accept-message' : 'error-message' " >{{ passwordMessage }}</p>
            </div>
            
            <button @click="sendForm">Login</button>
        
            <p class="login-end">Not a member yet? <router-link to="/register" class="nav-link" id="registro">Sign up now</router-link></p>

        </form>
        
    </section>

</template>
  
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');
@import url('https://fonts.cdnfonts.com/css/sansation');
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  .contendor-login {
    font-family: "Montagu Slab", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    
  }

  .login-title{
    font-size: 50px;
    font-family: 'Sansation', sans-serif;
    font-weight: 100;
  }
  
  .login-form {
  width: 450px;
  height: 600px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 6px 7px 40px rgba(0, 0, 0, 0.5),10px 10px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-bottom: 20px;
}

  

.login-form button{
  background-color: rgba(191, 204, 223, 1);
  width: 257px;
  height: 54px;
  border-radius: 25px; 
  font-size: 20px;
  transition: background-color 0.zs ease;
}

  .login-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    justify-content: start;
    transition: background-color 0.3s ease;
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

.login-form button:hover {
  background-color: rgba(150, 170, 190, 1);
}

.error-message {
    color: red;
  }

  .accept-message {
    color: green;
  }

</style>