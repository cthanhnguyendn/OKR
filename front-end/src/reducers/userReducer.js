/**
 * Created by W540 on 1/3/2017.
 */

const USER_LOADING = 'USER_LOADING';
const USER_LOAD_ERROR = 'USER_LOAD_ERROR';
const USER_LOAD_INFO_SUCCESS = 'USER_LOAD_INFO_SUCCESS';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
import {SubmissionError} from 'redux-form'
import {browserHistory} from 'react-router';
import {loadUserGroup} from './okrGroupReducer'

export default (state = {}, action) => {
  switch (action.type) {
    case USER_LOAD_INFO_SUCCESS: {
      return {
        ...state,
        user: action.result
      }
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        authenticated: true
      }
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        authenticated: false
      }
    }
    default: {
      return state;
    }
  }
}
export const fetchUserInfo = () => ({dispatch, getState, client}) => {
  dispatch({type: USER_LOADING})
  client.get("/api/authenticated-user").then(({body}) => {
    dispatch({type: USER_LOAD_INFO_SUCCESS, result: body})
    dispatch(loadUserGroup())
  })
}

export const logIn = ({userName, Password}) => ({dispatch, getState, client}) => {
  client.post("/api/login").then(({body, status, header}) => {
    dispatch({type: USER_LOGIN_SUCCESS});
  })
}
export const logout = () => ({dispatch, getState, client}) => {
  localStorage.removeItem("x-auth-token");
  dispatch({type: USER_LOGOUT_SUCCESS})
  browserHistory.push("/login");
}
// redux-form function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
export const submitLogin = (user, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({type: USER_LOADING});
    // return new Promise(resolve => {
    dispatch(({dispatch, getState, client}) => {
      client.post("/api/login", {data: user}).then(({body, status, header}) => {
        dispatch({type: USER_LOGIN_SUCCESS});
        browserHistory.push("/");
        resolve(body)
      }).catch(({body, error}) => {
        //throw new SubmissionError({ password: 'Wrong username or password',username: 'Wrong username or password' , _error: 'Login failed!' })
        reject({password: 'Wrong password', _error: 'Login failed!'});
      })
    })
    // })
  }).then(() => {
  }).catch((error) => {
    throw new SubmissionError(error)
  })
}
