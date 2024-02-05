import { createRouter, createWebHistory } from "vue-router"

const routes = [

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
        component: () => import("../modulos/mainPart/pages/Products.vue"),
    },
    {
        path: '/user',
        component: () => import("../modulos/mainPart/pages/User.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import("../modulos/mainPart/pages/NotFound.vue"),
    },
   
]



const router = createRouter({

    history:createWebHistory(),
    routes
})


export default router