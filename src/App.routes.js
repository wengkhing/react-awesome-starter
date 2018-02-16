import LoginPage from './containers/Login'
import Workspace from './containers/Workspace'
import Error404 from './containers/Error404'

import GroupOverviewPage from './containers/Group/GroupOverview'
import GroupSinglePage from './containers/Group/GroupSingle'
import GroupEditPage from './containers/Group/GroupEdit'

export const appRoutes = [
  {
    path: '/auth/login',
    component: LoginPage
  }, {
    path: '/manage',
    component: Workspace
  }, {
    component: Error404
  }
]

export const workspaceRoutes = [
  {
    path: '/manage/group/overview',
    component: GroupOverviewPage
  }, {
    path: '/manage/group/:id/single',
    component: GroupSinglePage
  }, {
    path: '/manage/group/:id/edit',
    component: GroupEditPage
  }, {
    component: Error404
  }
]
