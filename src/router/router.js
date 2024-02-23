import { createRouter, createWebHashHistory } from 'vue-router'
import AuthenticationState from './auth-guard'

const routes = [

    {
        path:'/',
        redirect:'/public'
    },
    
    {
        path: '/public',
        component: () => import("../layouts/PublicLayout.vue"),
        children: [
            {
                path: '/public',
                component: () => import("../modulos/initPart/pages/Home.vue")
            },

            {
                path: 'register',
                component: () => import("../modulos/initPart/pages/Register.vue")
            },
            {
                path: 'login',
                component: () => import("../modulos/initPart/pages/Login.vue")
            },
            {
                path: 'contact',
                component: () => import("../modulos/initPart/pages/ContactPublic.vue")
            },
            
        ]
    },
    {
        path: '/private',
        component: () => import("../layouts/PrivateLayout.vue"),
        children: [
            {
                path: 'products',
                beforeEnter:(to,from,next) =>{
                    const authentication = AuthenticationState()
                    if(!authentication){
                        next('/public')
                    }else{
                        next()
                    }
                },
                component: () => import("../modulos/mainPart/pages/Products.vue")
            },
            {
                path: 'user',
                beforeEnter:(to,from,next) =>{
                    const authentication = AuthenticationState()
                    if(!authentication){
                        next('/public')
                    }else{
                        next()
                    }
                },

                component: () => import("../modulos/mainPart/pages/User.vue")
            },
            {
                path: 'contact',
                beforeEnter:(to,from,next) =>{
                    const authentication = AuthenticationState()
                    if(!authentication){
                        next('/public')
                    }else{
                        next()
                    }
                },
                component: () => import("../modulos/mainPart/pages/Contact.vue")
            },
        ]
    },

    {
         path: '/:pathMatch(.*)*', component: () => import("../modulos/mainPart/pages/NotFound.vue"),
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router