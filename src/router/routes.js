
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/home.vue')
      },
      {
        path: 'contacts',
        component: () => import('pages/contacts.vue')
      },
      {
        path: 'catalog',
        component: () => import('pages/catalog.vue')
      },
      {
        path: 'input',
        component: () => import('pages/input.vue')
      },
      {
        path: 'card',
        component: () => import('pages/card.vue')
      },
      {
        path: 'basket',
        component: () => import('pages/basket.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/CleanLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'register', component: () => import('pages/reg.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
