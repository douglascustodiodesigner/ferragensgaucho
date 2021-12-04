import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d372992c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2a3fc8d5 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _08044eca = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _60054a3e = () => interopDefault(import('../pages/blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _2f5ee0b3 = () => interopDefault(import('../pages/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog-right-sidebar" */))
const _21e4553d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4816217a = () => interopDefault(import('../pages/login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _6513e7a4 = () => interopDefault(import('../pages/our-clients.vue' /* webpackChunkName: "pages/our-clients" */))
const _ae21ec1e = () => interopDefault(import('../pages/our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _3f9ca822 = () => interopDefault(import('../pages/our-working-process.vue' /* webpackChunkName: "pages/our-working-process" */))
const _31215094 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _6beb6cab = () => interopDefault(import('../pages/project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _a6f8b55c = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _67d34372 = () => interopDefault(import('../pages/service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _9402e3a2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _d372992c,
    name: "about"
  }, {
    path: "/blog",
    component: _2a3fc8d5,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _08044eca,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar",
    component: _60054a3e,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _2f5ee0b3,
    name: "blog-right-sidebar"
  }, {
    path: "/contact",
    component: _21e4553d,
    name: "contact"
  }, {
    path: "/login-register",
    component: _4816217a,
    name: "login-register"
  }, {
    path: "/our-clients",
    component: _6513e7a4,
    name: "our-clients"
  }, {
    path: "/our-team",
    component: _ae21ec1e,
    name: "our-team"
  }, {
    path: "/our-working-process",
    component: _3f9ca822,
    name: "our-working-process"
  }, {
    path: "/project",
    component: _31215094,
    name: "project"
  }, {
    path: "/project-details",
    component: _6beb6cab,
    name: "project-details"
  }, {
    path: "/service",
    component: _a6f8b55c,
    name: "service"
  }, {
    path: "/service-details",
    component: _67d34372,
    name: "service-details"
  }, {
    path: "/",
    component: _9402e3a2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
