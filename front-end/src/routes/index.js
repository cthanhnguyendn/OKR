// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import LoginPage from 'layouts/Login/LoginPage'
import OKRSideBarView from 'layouts/Home/OKRSideBarView'

/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  childRoutes: [
    {
      path: 'login',
      component: LoginPage
    },
    {
      component: CoreLayout,
      childRoutes: [
        {
          component: OKRSideBarView,
          indexRoute: {onEnter: (nextState, replace) => replace('/summary/myokr')},
          childRoutes: [
            {
              path: 'summary',
              indexRoute: {onEnter: (nextState, replace) => replace('/summary/myokr')},
              childRoutes: [
                {
                  path: ':okrtype',
                  getComponent (nextState, cb) {
                    require.ensure([], (require) => {
                      const Summary = require('layouts/Summary').default
                      //const reducer = require('./modules/counter').default
                      //injectReducer(store, { key: 'counter', reducer })
                      cb(null, Summary)
                    }, 'counter')
                  }
                }
              ]

            },
            {
              path: 'setup',
              indexRoute: {onEnter: (nextState, replace) => replace('/setup/myokr/manage')},
              childRoutes: [
                {
                  path: ":okrtype",
                  indexRoute: {onEnter: (nextState, replace) =>{
                    const okrtype = nextState.params.okrtype;
                    return replace(`/setup/${okrtype}/manage`)
                  }},
                  getComponent(nextState, cb){
                    require.ensure([], (require) => {
                      const SetupOKR = require('layouts/SetupOKR').default;
                      cb(null, SetupOKR);
                    }, 'setupokr')
                  },
                  childRoutes:[
                    {
                      path:"manage",
                      getComponent(nextState, cb){
                        require.ensure([], (require) => {
                          const Manage = require('layouts/SetupOKR/Manage/Manage').default;
                          cb(null, Manage);
                        }, 'manageork')
                      }
                    },{
                      path:"history",
                      getComponent(nextState, cb){
                        require.ensure([], (require) => {
                          const SetupOKR = require('layouts/SetupOKR/ObjectiveHistory/ObjectiveHistory').default;
                          cb(null, SetupOKR);
                        }, 'objectivehistory')
                      }
                    }, {
                      path:"setupgroup",
                      onEnter(nextState, replace, callback){
                        const {okrtype} = nextState.params;
                        if(okrtype != 'group'){
                          replace(`/setup/${okrtype}/manage`)
                        }
                        callback()
                      },
                      getComponent(nextState, cb){
                        require.ensure([], (require) => {
                          const CreateGroup = require('layouts/SetupOKR/CreateGroup/CreateGroup').default;
                          cb(null, CreateGroup);
                        }, 'setupgroup')
                      }
                    }
                  ]

                }
              ]

            }
          ]
        }
      ]
    }]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
 using getChildRoutes with the following signature:
 getChildRoutes (location, cb) {
 require.ensure([], (require) => {
 cb(null, [
 // Remove imports!
 require('./Counter').default(store)
 ])
 })
 }
 However, this is not necessary for code-splitting! It simply provides
 an API for async route definitions. Your code splitting should occur
 inside the route `getComponent` function, since it is only invoked
 when the route exists and matches.
 */

export default createRoutes
