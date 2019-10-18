import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Annuaire from './views/Annuaire.vue'
import Calendrier from './views/Calendrier.vue'
import Billets from './views/Billets.vue'
import Compte from './views/Compte.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/dashboard'
    },
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title:'Dashboard - OLBT'
      }
    },
    {
      path: '/annuaire',
      name: 'annuaire',
      component: Annuaire,
      meta: {
        title:'Annuaire - OLBT'
      }
    },
    {
      path: '/calendrier',
      name: 'calendrier',
      component: Calendrier,
      meta: {
        title:'Calendrier - OLBT'
      }
    },
    {
      path: '/billets',
      name: 'billets',
      component: Billets,
      meta: {
        title:'Billets - OLBT'
      }
    },
    {
      path: '/compte',
      name: 'compte',
      component: Compte,
      meta: {
        title:'Compte - OLBT'
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
