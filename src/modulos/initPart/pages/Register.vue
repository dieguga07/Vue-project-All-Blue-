<script>
export default{








}

</script>


<template>

<section class="contendor-register">

    <form class="register-form">
        <p class="register-title">Sing up</p>
        
        <div class="register-input">

            <label for="user" class="register-label">User</label>
            <input v-model="user"  type="text" id="user" name="user" required>
            <p :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</p>
            
            <label for="user" class="register-label">Email</label>
            <input v-model="user"  type="text" id="user" name="user" required>
            <p :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</p>
         
            <label for="user" class="register-label">Phone</label>
            <input v-model="user"  type="text" id="user" name="user" required>
            <p :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</p>
            
            <label for="password" class="register-label">Password</label>
            <input v-model="password"  type="password" id="password" name="password" required>
            <p  :class=" validPassword ? 'accept-message' : 'error-message' " >{{ passwordMessage }}</p>
          
        </div>


        <div class="boton-texto">
            <button @click="sendForm">Get started</button>
        
            <p class="register-end">Already have an account ?<router-link to="/login" class="nav-link" id="registro">Log in now</router-link></p>
        </div>
            

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
  
.boton-texto{
    padding-top: 40px;
}

  .contendor-register {
    font-family: "Montagu Slab", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    
  }

  .register-title{
    font-size: 50px;
    padding-top: 20px;
    font-family: 'Sansation', sans-serif;
    font-weight: 100;
  }
  
  .register-form {
  width: 450px;
  height: 800px;
  padding: 5px;
  border-radius: 25px;
  box-shadow: 6px 7px 40px rgba(0, 0, 0, 0.5),10px 10px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-bottom: 5px;
}

  

.register-form button{
  background-color: rgba(191, 204, 223, 1);
  width: 257px;
  height: 54px;
  border-radius: 25px; 
  font-size: 20px;
  transition: background-color 0.zs ease;
}

  .register-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    justify-content: start;
    transition: background-color 0.3s ease;
  }

.register-input input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    outline: none;
    padding: 5px 0;
    font-size: 16px;
}

.register-input .register-label{
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding-top: 10px;
  color:  rgba(0, 0, 0, 0.6);
 
}

.register-end{
padding-top: 50px;

}

.register-end a{
  color: rgba(42, 161, 185, 1);
  list-style: none;
  text-decoration: none;
}

.register-form button:hover {
  background-color: rgba(150, 170, 190, 1);
}

.error-message {
    color: red;
  }

  .accept-message {
    color: green;
  }

</style>