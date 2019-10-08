import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Annuaire from './views/Annuaire.vue'
import Calendrier from './views/Calendrier.vue'

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
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
