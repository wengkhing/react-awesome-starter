import React from 'react'
import { Route } from 'react-router-dom'
import _ from 'lodash'

export const renderRoutes = (routes) => {
  return routes.map(route => (
    <Route
      key={_.uniqueId()}
      exact={route.exact || false}
      path={route.path || null}
      component={route.component}
    />
  ))
}
