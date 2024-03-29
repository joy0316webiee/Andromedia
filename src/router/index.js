import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home/'
    },
    {
      path: '/home',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/pages/home/Home.vue')
        }
      ]
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
          path: 'restore',
          component: () => import('@/pages/device/DeviceRestore.vue')
        }
      ]
    },
    {
      path: '/code',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'edit',
          component: () => import('@/pages/code/ScriptEdit.vue')
        },
        {
          path: 'run',
          component: () => import('@/pages/code/ScriptRun.vue')
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
      path: '/task',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'goods',
          component: () => import('@/pages/task/TaskPushGoods.vue')
        },
        {
          path: 'order',
          component: () => import('@/pages/task/TaskPushOrder.vue')
        },
        {
          path: 'shop',
          component: () => import('@/pages/task/TaskPushShop.vue')
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
          path: 'account',
          component: () => import('@/pages/personal/PersonalAccount.vue')
        },
        {
          path: 'customer',
          component: () => import('@/pages/personal/PersonalCustomer.vue')
        },
        {
          path: 'user',
          component: () => import('@/pages/personal/PersonalUser.vue')
        }
      ]
    },
    {
      path: '/trace',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('@/pages/trace/TraceHome.vue')
        },
        {
          path: 'manage',
          component: () => import('@/pages/trace/TraceDocManage.vue')
        },
        {
          path: 'task',
          component: () => import('@/pages/trace/TraceTask.vue')
        }
      ]
    },
    {
      path: '/help',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('@/pages/help/HelpHome.vue')
        }
      ]
    },
    {
      path: '/label',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: 'grouping',
          component: () => import('@/pages/label/LabelGrouping.vue')
        }
      ]
    },
    {
      path: '/ecommerce',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/pages/ecommerce/EcoContent.vue')
        }
      ]
    }
  ]
});
