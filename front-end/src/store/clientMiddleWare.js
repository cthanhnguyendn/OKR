/**
 * Created by W540 on 1/3/2017.
 */
export default (client) => {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action({dispatch, getState, client});
      }
      const { promise, onSuccess, onFailed, types, ...rest } = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }
      const [REQUEST, SUCCESS, FAILURE] = types;
      next({...rest, type: REQUEST});
      let actionPromise;
      try{
        actionPromise = promise(client);
      }catch (e){
        console.error(e)
      }
      // const actionPromise = promise(client);
      actionPromise.then(
        (result) => {
          const successResult = next({...rest, result, type: SUCCESS});
          if ( onSuccess ) {
            onSuccess({dispatch, getState, result});
          }
          return successResult;
        },
        (error) => {
          const failedResult = next({...rest, error, type: FAILURE});
          if(onFailed){
            onFailed({dispatch, getState, error});
          }
          return failedResult;
        }
      ).catch((error)=> {
        console.error('MIDDLEWARE ERROR:', error);
        console.log(error.stack);
        next({...rest, error, type: FAILURE});
      });

      return actionPromise;
    };
  };
}
