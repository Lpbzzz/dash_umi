const routes = [
  {
    name: 'login',
    path: '/login',
    component: './Login',
    menuRender: false,
    hideInMenu: true,
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    name: '首页',
    path: '/dashboard',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
    access: 'canSeeAdmin',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
];

export default routes;
