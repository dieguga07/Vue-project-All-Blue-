import {defineStore} from  'pinia'



export const UserContext = defineStore('userState',{

    state: () =>({

        user:false,
        nombre:"",
        email:"",
        phone:"",
        password:"",
        cart:[]

    }),


    //getters  --->  funcionalidades que no cambien  el estado , ejemplo hacer operaciones con el valor 

    actions:{

        setUser(newState) {
          this.user = newState
        },

        setName(newState) {
          this.nombre = newState
        },

        setEmail(newState) {
          this.email = newState
        },

        setPhone(newState) {
          this.phone = newState
        },

        setPassword(newState) {
          this.password = newState
        },

      },

      persist: {
        enabled:true,
        strategies:[
          {
            key:"user",
            storage: localStorage,
          },
         
        ]
      }



})