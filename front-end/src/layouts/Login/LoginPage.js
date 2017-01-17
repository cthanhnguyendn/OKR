/**
 * Created by W540 on 1/5/2017.
 */
import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {submitLogin} from 'reducers/userReducer'
import {InputForm, SelectForm, CheckboxForm} from 'components/common'
class LoginPage extends Component {
  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="login-wrapper">
        <div className="login-box">
          <img id="logo-img" className="oss-logo"
               src="http://oss.seedcom.vn/;jsessionid=73DB13D30E832C80A9463E4A6E9959E5-n1.joss_app39/img/company-logo/oss-logo.svg"
               alt="OSS logo"/>
          <form onSubmit={handleSubmit(submitLogin)}>
            <div className="form-group">
              <Field name="username" placeholder="Tài khoản" component={InputForm}/>
            </div>
            <div className="form-group">
              <Field name="password" type="password" placeholder="Mật khẩu" component={InputForm}/>
            </div>
            <div className="login-submit form-inline">
              <div className="form-group checkbox pull-left">
                <Field type="checkbox" name="remember_me" placeholder="Mật khẩu" component={CheckboxForm}/>Ghi nhớ
              </div>
              <div className="form-group pull-right">
                <button disabled={submitting} type="submit" className="btn btn-success b-login">Đăng nhập</button>
              </div>
            </div>
            <div className="footer">
              <div style={{padding: '14px 1px', display: 'none'}}>
                <a style={{float: 'left'}} href="/forgotpass">Quyên mật khẩu</a>
                <a style={{float: 'right'}} href="/user/register" className="text-center">Đăng ký</a>
              </div>
            </div>
            <input type="hidden" name="_csrf" value="f3886484-87ac-4c41-b2f2-1b20bc08fa6f"/>
          </form>
        </div>
      </div>
    )
  }
}
export default reduxForm({form: "logInForm"})(LoginPage)
