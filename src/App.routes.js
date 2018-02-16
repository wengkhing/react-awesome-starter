import LoginPage from './containers/Login'
import Workspace from './containers/Workspace'
import Error404 from './containers/Error404'

import GroupOverviewPage from './containers/Group/GroupOverview'
import GroupSinglePage from './containers/Group/GroupSingle'
import GroupEditPage from './containers/Group/GroupEdit'

import AgendaCreatePage from './container/Agenda/AgendaCreate'
// put pages that doesn't required authentication in appRoutes
// To change first page to view after login
//    Go to Login.js and modify path in <Redirect to>
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

// put pages that required authentication in workspaceRoutes
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
    path: '/manage/group/:id/agenda/create',
    component: AgendaCreatePage
  }, {
    component: Error404
  }
]
