import AppRedux from 'containers/AppContainer'

const routes = [
  {
    path: '/',
    exact: true,
    component: AppRedux
  },
  {
    path: '/chat/:id',
    exact: true,
    component: AppRedux
  }
]

export default routes
