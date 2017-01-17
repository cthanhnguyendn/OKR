import superagent from 'superagent';
import { browserHistory } from 'react-router';
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
  setDispatch(dispatch) {
    this.dispatch = dispatch;
  }

  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, {params, data, headers} = {}) => new Promise((resolve, reject) => {
        //const request = superagent[method](formatUrl(path));
        const request = superagent[method](path);

        if (params) {
          request.query(params);
        }

        let authenToken = localStorage.getItem("x-auth-token");
        headers = {...headers, ["x-auth-token"]: authenToken}
        request.set(headers)

        if (data) {
          //console.log('send request to ' + path);
          request.send(data);
        }
        request.end((err, {status, body, header} = {}) => {
          // console.log('request recieve ' + body + err);
          if (status == 401 || status == 403) {
            browserHistory.push('/login')
          }
          let authenToken = localStorage.getItem("x-auth-token");
          let newToken = header["x-auth-token"];
          if (newToken && newToken != authenToken) {
            localStorage.setItem("x-auth-token", newToken)
          }
          return err ? reject({body, err}) : resolve({body, status});
        });
      }));
    if (!instance) {
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
  empty() {
  }
};
export const getInstance = () => (instance);
