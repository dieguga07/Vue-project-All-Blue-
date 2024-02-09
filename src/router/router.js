import { createRouter, createWebHashHistory } from "vue-router"

const routes = [

    // {
    //     path:'/',
    //     redirect:'/home',
    // },
    // {
    //     path:'/home',
    //     name: 'home',
    //     component: () => import("../modulos/initPart/pages/Home.vue"),
    //     children:[
    //         {
    //             path:'login',
    //             name:'login',
    //             component: () => import("../modulos/initPart/pages/Login.vue"),
    //         },
    //         {
    //             path:'register',
    //             name:'register',
    //             component: () => import("../modulos/initPart/pages/Register.vue"),
    //         }
    //     ],
    // },

    // {
    //  path:'products',
    //  name:'products',
    //  component: () => import("../modulos/mainPart/pages/Products.vue"),
    //  children:[
    //     {
    //         path:'user',
    //         name:'user',
    //         component: () => import("../modulos/mainPart/pages/User.vue"),
    //     },
    //     {
    //         path:'contact',
    //         name:'contact',
    //         component: () => import("../modulos/mainPart/pages/Contact.vue"),
    //     }
    //  ],   
    // },

    // {
    //     path: '/:pathMatch(.*)*',
    //     component: () => import("../modulos/mainPart/pages/NotFound.vue"),
    // },


    {
        path: '/',
        component: () => import("../modulos/initPart/pages/Home.vue"),
    },
    {
        path: '/login',
        component: () => import("../modulos/initPart/pages/Login.vue"),
    },
    {
        path: '/register',
        component: () => import("../modulos/initPart/pages/Register.vue"),
    },
    {
        path: '/products',
        // beforeEnter: (to, from, next)
        component: () => import("../modulos/mainPart/pages/Products.vue"),
    },
    {
        path: '/user',
        component: () => import("../modulos/mainPart/pages/User.vue"),
    },
    {
        path: '/contact',
        component: () => import("../modulos/mainPart/pages/Contact.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
    component: () => import("../modulos/mainPart/pages/NotFound.vue"),
    },
   
]



const router = createRouter({

    history:createWebHashHistory(),
    routes
})




export default router