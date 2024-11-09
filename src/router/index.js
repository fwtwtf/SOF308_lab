import { createRouter, createWebHistory } from 'vue-router';
import Lab1Bai4 from "../components/lab1/bai4.vue"

import Lab2Bai1 from "../components/lab2/bai1.vue"
import Lab2Bai4 from "../components/lab2/bai4.vue"
import Lab3Bai1 from "../components/lab3/bai4.vue"
import Lab3Bai3 from "../components/lab3/post.vue"
import Lab3Bai4 from "../components/lab3/postdetil.vue"



const routes = [
    { path: '/lab2/bai1', component: Lab2Bai1 },
    { path: '/lab2/bai2', component: Lab2Bai4 },
    { path: '/lab1/bai4', component: Lab1Bai4 },
    { path: '/lab3/bai1', component: Lab3Bai1 },
    { path: '/lab3/Bai3', component: Lab3Bai3 },
    { path: '/lab3/Bai4', component: Lab3Bai4 }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;