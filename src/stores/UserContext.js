import {defineStore} from  'pinia'



export const UserContext = defineStore('userState',{

    state: () =>({

        user:true,

    }),


    //getters  --->  funcionalidades que no cambien  el estado , ejemplo hacer operaciones con el valor 

    actions:{

        setUser(newState) {
          this.user = newState
        },

      }


})