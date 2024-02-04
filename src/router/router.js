import { createRouter, createWebHistory } from "vue-router"

const routes = [

    {
        path: '/',
        component: () => import("../pages/Home.vue"),
    },
    {
        path: '/login',
        component: () => import("../pages/Login.vue"),
    },
    {
        path: '/register',
        component: () => import("../pages/Register.vue"),
    },
    {
        path: '/products',
        component: () => import("../pages/Products.vue"),
    },
    {
        path: '/user',
        component: () => import("../pages/User.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import("../pages/NotFound.vue"),
    },
   
]



const router = createRouter({

    history:createWebHistory(),
    routes
})


export default router