import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/': {
        component: (resolve) => {
            require(['../views/admin/index.vue'], resolve)
        }
    },
    '/faq': {
        component: (resolve) => {
            require(['../views/admin/faq.vue'], resolve)
        }
    },
    '/login': {
        component: (resolve) => {
            require(['../views/admin/faq.vue'], resolve)
        }
    },
    '/list': {
        component: (resolve) => {
            require(['../views/admin/list.vue'], resolve)
        }
    },
    '/setting': {
        component: (resolve) => {
            require(['../views/admin/setting.vue'], resolve)
        }
    }
})

export default router
