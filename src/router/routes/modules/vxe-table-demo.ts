import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/test',
  name: 'Test',
  component: LAYOUT,
  redirect: '/test/vxe-table',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'vxe-table测试',
  },
  children: [
    {
      path: 'table',
      name: 'vxe-table',
      component: () => import('/@/views/vxe-table-demo/index.vue'),
      meta: {
        // affix: true,
        title: 'vxe-table测试',
      },
    },
  ],
};

export default dashboard;
