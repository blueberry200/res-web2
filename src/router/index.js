import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach(() => {
	window.scrollTo(0, 0);
  let navUlContainer = document.getElementById("navUlContainer");
  let mobNavTog = document.getElementById("mobNavTog");
   //在手機版主選單被點擊才會更改toggle圖標
  if(navUlContainer.classList.contains("mobileNav")){
    navUlContainer.classList.remove("mobileNav");
    mobNavTog.classList.toggle("fa-bars");
    mobNavTog.classList.toggle("fa-xmark");
  }
});

export default router