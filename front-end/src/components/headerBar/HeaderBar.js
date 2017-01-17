/**
 * Created by W540 on 1/3/2017.
 */
import React,{Component,PropTypes} from 'react';
import {Dropdown,MenuItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logout} from 'reducers/userReducer'
import {CustomeToggle} from 'components'

@connect(state => ({user: state.user}))
export default class HeaderBar extends Component{
  constructor(){
    super();
    this.state = {
      enableSearch: false
    }
    this.closeSearch = this.closeSearch.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  closeSearch(){
    this.setState({enableSearch: false})
  }
  openSearch(){
    this.setState({enableSearch: true})
    this.headerInput.focus();
  }
  componentDidUpdate(){
    if(this.state.enableSearch){
      // TODO: may lead to performance issue (interacted with DOM every update)
      this.headerInput.focus();
    }
  }
  onLogout(){
    this.props.dispatch(logout());
  }
  render(){
    return (
      <div className="header-bar">
        <div className={`header-content ${this.state.enableSearch && "enable-search"}`}>
          {
            // TODO: move the title below to properties to reused this component
          }
          <h1>OKR</h1>
          <div className="main-search-box">
            <input ref={(input) => {this.headerInput = input;}}
                   className="form-control flat-control header-search-input" onBlur={this.closeSearch} placeholder="Tìm kiếm bằng từ khóa" />
            <div className="search-icon">
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="tool-box">
            <ul  className="nav navbar-nav navbar-right">
              <li className="search-icon">
                <a href="#" className="toogle-search-tool" onClick={this.openSearch}><i className="fa fa-search"></i></a>
              </li>
              <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
              <li className="messages-menu">
                <Dropdown id="notification">
                  <CustomeToggle bsRole="toggle">
                    <a href="#"><i className="fa fa-bell" aria-hidden="true"></i></a>
                  </CustomeToggle>
                  <Dropdown.Menu bsRole="menu">
                    <li className="header">Bạn không có thông báo mới nào</li>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="user user-menu">
                <Dropdown id="user-control">
                  <CustomeToggle bsRole="toggle">
                    <img className="user-image" src="img/user2-160x160.jpg"/>
                  </CustomeToggle>
                  <Dropdown.Menu bsRole="menu" className="super-colors">
                    <MenuItem className="user-header">
                      <img src="http://oss.seedcom.vn/upload/2016/11/28/1480298523695.jpg" className="img-circle c-user-avatar-holder user-avatar-SC00041" alt="User Image"/>
                      <p>
                        Nguyễn Công Thành - Lập trình viên
                      </p>
                    </MenuItem>
                    <li className="user-body">
                      <div className="col-xs-4 text-center">
                        <a href="/shift/dotimekeeping">Chấm công</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="/leave/myleaves">Nghỉ phép</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Mật khẩu</a>
                      </div>
                    </li>
                    <MenuItem className="user-footer">
                      <div className="pull-left">
                        <a href="/employee/view" className="btn btn-flat">Hồ sơ</a>
                      </div>
                      <div className="pull-right">
                        <a href="#" onClick={this.onLogout} className="btn btn-flat">Đăng xuất</a>
                      </div>
                    </MenuItem>
                  </Dropdown.Menu>
                </Dropdown>

              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
