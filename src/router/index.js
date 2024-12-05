import { createRouter, createWebHistory } from 'vue-router';
import Lab1Bai4 from "../components/lab1/bai4.vue"

import Lab2Bai1 from "../components/lab2/bai1.vue"
import Lab2Bai4 from "../components/lab2/bai4.vue"
import Lab3Bai1 from "../components/lab3/bai4.vue"
import Lab3Bai3 from "../components/lab3/post.vue"
import Lab3Bai4 from "../components/lab3/postdetil.vue"


import Lab5Bai1 from "../components/lab5/Bai1Component.vue"
import Lab5Bai2 from "../components/lab5/Bai2Component.vue"
import Lab5Bai3 from "../components/lab5/Bai3Component.vue"

import Lab6Bai1 from "../components/lab6/Bai1Component.vue"
import Lab6Bai2 from "../components/lab6/Bai2Component.vue"
import Lab6Bai3 from "../components/lab6/bai3Component.vue"

import Lab6Bai4 from "../components/lab6/Bai4Component.vue"


import Lab7Bai1 from "../components/lab7/Bai1Component.vue"

import Lab7Bai2 from "../components/lab7/Bai2Component.vue"







const routes = [
    { path: '/lab2/bai1', component: Lab2Bai1 },
    { path: '/lab2/bai2', component: Lab2Bai4 },
    { path: '/lab1/bai4', component: Lab1Bai4 },
    { path: '/lab3/bai1', component: Lab3Bai1 },
    { path: '/lab3/Bai3', component: Lab3Bai3 },
    { path: '/lab3/Bai4', component: Lab3Bai4 },
    { path: '/lab5/Bai1', component: Lab5Bai1 },
    { path: '/lab5/Bai2', component: Lab5Bai2 },
    { path: '/lab5/Bai3', component: Lab5Bai3 },

    { path: '/lab6/Bai1', component: Lab6Bai1 },
    { path: '/lab6/Bai3', component: Lab6Bai3 },

    { path: '/lab6/Bai2', component: Lab6Bai2 },
    { path: '/lab6/Bai4', component: Lab6Bai4 },


    { path: '/lab7/Bai1', component: Lab7Bai1 },
    { path: '/lab7/Bai2', component: Lab7Bai2 },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;