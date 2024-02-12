import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/public',
        component: () => import("../layouts/PublicLayout.vue"),
        children: [
            { 
                path: '', 
                component: () => import("../modulos/initPart/pages/Home.vue") 
            },

            { 
                path: 'register', 
                component: () => import("../modulos/initPart/pages/Register.vue") 
            },
            { 
                path: 'login', 
                component: () => import("../modulos/initPart/pages/Login.vue")
            }
        ]
    },
    {
        path: '/private',
        component: () => import("../layouts/PrivateLayout.vue"),
        children: [
            {
                path: 'products',
                component: () => import("../modulos/mainPart/pages/Products.vue")
            },
            {
                path: 'user',
                component: () => import("../modulos/mainPart/pages/User.vue")
            },
            {
                path: 'contact',
                component: () => import("../modulos/mainPart/pages/Contact.vue")
            },
        ]
    },

    { 
        path: '/:pathMatch(.*)*', redirect: '/public' 
    } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


