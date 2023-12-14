import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../layout/Layout.vue'),
            children: [
                {
                    path: '',
                    name: 'Dashboard',
                    component: () => import('../views/Dashboard.vue'),
                    meta: {
                        title: 'Dashboard'
                    }
                },
                {
                    path: '/order',
                    name: 'Order',
                    component: () => import('../views/Order.vue'),
                    meta: {
                        title: 'Order',
                        requiresAuth: true

                    }
                },
                {
                    path: '/user',
                    name: 'User',
                    component: () => import('../views/User.vue'),
                    meta: {
                        title: 'User',
                    }
                }
            ]
        },
        {
            path: '/Home',
            redirect: '/'
        },
        // {
        //     path: '/',
        //     name: 'Layout',
        //     redirect: '/Dashboard',
        //     component: () => import('../layout/Layout.vue'),
        //     children: [
        //         {
        //             path: '/Dashboard',
        //             name: 'Dashboard',
        //             component: () => import('../views/Labs.vue')
        //         }
        //     ]
        // },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: () => import('../views/Login.vue')
        // },
        {
            path:'/:pathMatch(.*)*',
            name:'NotFound',
            component: () => import('../views/Error.vue')
        }
    ]
})

function forbiddenRoute(next) {
    console.log('forbiddenRoute')
    next('/login')
}

// router.beforeEach((to, from, next) => {
//     const isLogin = localStorage.getItem('token') ? true : false;
//     if (to.path == '/login') {
//         next();
//     } else {
//         isLogin ? next() : forbiddenRoute(next);
//     }
// })



export default router;