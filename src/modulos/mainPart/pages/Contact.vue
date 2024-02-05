<script>
export default {

data(){
    return{
        user:"",
        text: "",
        validUser:false,
        validText:false,
        userMessage: "" ,
        textMessage: "" ,
        confirmContact: "",
    }
},
methods:{

    sendForm(e){

        e.preventDefault()

        this.checkUser()

        this.checkText()

        if(this.validUser && this.validText){
 
            return (
                this.confirmContact = "Enviado con exito...",
                this.user = "",
                this.text = "",

                setTimeout(() => {
                    this.confirmContact = "" 
            }, 3000)

            )
   
        }

    },

    checkUser(){
        if(this.user.trim() === "" ){
          this.userMessage = "Este campo no puede estar vacio"
          return this.validUser = false
        }

        else if(this.user.length < 4 ){
          this.userMessage = "El nombre del usuario de estar compuesto por 4 letras o mas"
          return this.validUser = false
        }

        this.userMessage = "Todo OK"
        this.validUser = true
    },

    checkText(){
        if(this.text.trim() === "" ){
          this.textMessage = "Este campo no puede estar vacio"
          return this.validText = false
        }

        this.textMessage = "Todo OK"
        this.validText = true
    },

    

},
watch:{
    user: function () {
      this.checkUser();
    },

    text: function () {
      this.checkText();
    },

},



    
}
</script>

<template>
    <section class="contendor-contact">

        <form class="contact-form">
            <p class="contact-title">Contact us</p>

            <div class="contact-input">

                <label for="user" class="contact-label">User</label>
                <!-- Con v-model hacemos un enlazado bidireccional de este input con la variable user -->
                <input v-model="user"  type="text" id="user" name="user" >
                <!-- Segun la validez del usuario , establecemos una clase u otra -->
                <p :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</p>

                <label for="text" class="contact-label">Text</label>
                <!-- Con v-model hacemos un enlazado bidireccional de este input con la variable password -->
                <textarea v-model="text" id="text" name="text" ></textarea>
                <!-- Segun la validez de password , establecemos una clase u otra -->
                <p  :class=" validText ? 'accept-message' : 'error-message' " >{{ textMessage }}</p>
            </div>
            
            <button @click="sendForm">Enviar</button>

           
            
            
            <p class="contact-end"><router-link to="/products" class="nav-link" id="registro">Go back</router-link></p>

        </form>

    </section>

    <div class="toast-container">
        <p class="toast-message">{{ confirmContact }}</p>
    </div>
        
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');

@import url('https://fonts.cdnfonts.com/css/sansation');

  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  .toast-container {
  position: fixed;
  bottom: 20px; /* Ajusta la distancia desde el borde inferior */
  right: 20px; /* Ajusta la distancia desde el borde derecho */
  background-color: blueviolet;
  color: aquamarine;
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
  display: none;
  animation: fadeInOut 2s ease-in-out forwards;
}

.toast-message {
  margin: 0;
}

  .contendor-contact {
    font-family: "Montagu Slab", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    
  }

  .contact-title{
    font-size: 50px;
    font-family: 'Sansation', sans-serif;
    font-weight: 100;
  }
  
  .contact-form {
  width: 450px;
  height: 650px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 6px 7px 40px rgba(0, 0, 0, 0.5),10px 10px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-bottom: 20px;
}


.contact-form button{
  background-color: rgba(191, 204, 223, 1);
  width: 257px;
  height: 54px;
  border-radius: 25px; 
  font-size: 20px;
  transition: background-color 0.zs ease;
}

  .contact-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    justify-content: start;
    transition: background-color 0.3s ease;
  }
  .contact-input textarea {
    width: 100%;
    height: 100px; 
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;
    resize: none; 
  }

.contact-input input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    outline: none;
    padding: 5px 0;
    font-size: 16px;
}

.contact-input .contact-label{
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding-top: 50px;
  color:  rgba(0, 0, 0, 0.6);
}

.contact-end{
padding-top: 50px;

}

.contact-end a{
  color: rgba(42, 161, 185, 1);
  list-style: none;
  text-decoration: none;
}

.contact-form button:hover {
  background-color: rgba(150, 170, 190, 1);
}

.error-message {
    color: red;
  }

  .accept-message {
    color: green;
  }

</style>