import superagent from 'superagent';
//import {LinkCreator} from 'utils'
//import {push } from 'react-router-redux'
// import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

// function formatUrl(path) {
//   const adjustedPath = path[0] !== '/' ? '/' + path : path;
//   if (__SERVER__) {
//     // Prepend host and port of the API server to the path.
//     return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
//   }
//   // Prepend `/api` to relative URL, to proxy to API server.
//   return '/api' + adjustedPath;
// }
let instance;

export default class ApiClient {
  setDispatch(dispatch){
    this.dispatch = dispatch;
  }
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data , headers} = {}) => new Promise((resolve, reject) => {
        //const request = superagent[method](formatUrl(path));
        const result = require(`json/${path}`)
        setTimeout(()=>{
          resolve(result)
        },500)
      }));
    if(!instance){
      instance = this;
    }
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() {}
};
export const getInstance = () => (instance);
