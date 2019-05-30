import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'device/suspension'
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
          path: 'suspension',
          component: () => import('@/pages/device/DeviceSuspension.vue')
        },
        {
          path: 'details',
          component: () => import('@/pages/device/DeviceDetails.vue')
        },
        {
          path: 'manage',
          component: () => import('@/pages/device/DeviceManage.vue')
        },
        {
          path: 'editscript',
          component: () => import('@/pages/device/DeviceEditScript.vue')
        },
        {
          path: 'runscript',
          component: () => import('@/pages/device/DeviceRunScript.vue')
        },
        {
          path: 'restore',
          component: () => import('@/pages/device/DeviceRestore.vue')
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
        },
        {
          path: 'room',
          component: () => import('@/pages/chat/ChatRoom.vue')
        }
      ]
    },
    {
      path: '/auto',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'replyblast',
          component: () => import('@/pages/auto/AutoReplyBlast.vue')
        },
        {
          path: 'replyrobot',
          component: () => import('@/pages/auto/AutoReplyRobot.vue')
        }
      ]
    },
    {
      path: '/bigdata',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('@/pages/bigdata/BigDataHome.vue')
        },
        {
          path: 'search',
          component: () => import('@/pages/bigdata/BigDataSearch.vue')
        }
      ]
    },
    {
      path: '/personal',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'basic',
          component: () => import('@/pages/personal/PersonalBasic.vue')
        },
        {
          path: 'user',
          component: () => import('@/pages/personal/PersonalUser.vue')
        },
        {
          path: 'customer',
          component: () => import('@/pages/personal/PersonalCustomer.vue')
        },
        {
          path: 'client',
          component: () => import('@/pages/personal/PersonalClient.vue')
        }
      ]
    }
  ]
});
