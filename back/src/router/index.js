import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from "@/views/ArticlesView";
import ArticleTextView from "@/views/ArticleTextView";
import defaultLayout from "@/layouts/default-layout";
import loginLayout from "@/layouts/login-layout";
import TovarView from "@/views/TovarView";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesView
  },
  {
    path: '/article_text/:id',
    name: 'article_text',
    component: ArticleTextView
  },
    {
        path: '/tovar/:id',
        name: 'tovar',
        component: TovarView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
