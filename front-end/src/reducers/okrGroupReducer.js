/**
 * Created by W540 on 1/13/2017.
 */
const LOAD_USER_GROUP_SUCCESS = "LOAD_USER_GROUP_SUCCESS"

export default (state={},action) => {
  switch (action.type){
    case LOAD_USER_GROUP_SUCCESS:{
      return {...state,listGroup:action.result}
    }
    default:{
      return state
    }
  }
}
export const loadUserGroup = (userId) => ({dispatch}) => dispatch({type:LOAD_USER_GROUP_SUCCESS,result:require('json/userGroup.json')})
