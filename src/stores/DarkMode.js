import {defineStore} from  'pinia'


export const DarkMode = defineStore ("darkMode",{


    state: () =>({

      dark:false


    }),

    actions:{

        setDarkMode(newState){
            this.dark = newState
        }

      },

      persist: {
        enabled:true,
        strategies:[
          {
            key:"dark",
            storage: localStorage,
          },
         
        ]
      }

})

