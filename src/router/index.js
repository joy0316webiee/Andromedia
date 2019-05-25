import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'device/list'
    },
    {
      path: '/device',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'list',
          component: () => import('@/pages/device/DeviceList.vue')
        },
        {
          path: 'gallery',
          component: () => import('@/pages/device/DeviceGallery.vue')
        },
        {
          path: 'details',
          component: () => import('@/pages/device/DeviceDetails.vue')
        },
        {
          path: 'manage',
          component: () => import('@/pages/device/DeviceManage.vue')
        }
      ]
    },
    {
      path: '/chat',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'friend',
          component: () => import('@/pages/chat/ChatFriend.vue')
        }
      ]
    }
  ]
});
