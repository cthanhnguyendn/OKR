/**
 * Created by W540 on 1/12/2017.
 */
import React,{Component, PropTypes} from 'react'
import {Link} from 'react-router'
import './SetupOKR.scss'
export default class SetupOKR extends Component{
  render(){
    const okrtype = this.props.params.okrtype;
    const pathSplit = location.pathname.match(/^(\/[^\/]+)(\/[^\/]+)?(\/[^\/]+)?/i);
    const thirstPath = pathSplit[3];
    return (
      <div>
        <div className="row margin">
          <div className="col-xs-12 ">
            <h2 className="okr-title">OKR của tôi</h2>
          </div>
        </div>
        <div className="row margin">
          <div className="col-xs-12 ">
            <div className="header-tabs">
              <div className="pull-left">
                <ul className="nav nav-tabs">
                  <li className={thirstPath == "/manage" && "active"}>
                    <Link to={{pathname:`/setup/${okrtype}/manage`,query:this.props.location.query}} >Quản lý OKR</Link>
                  </li>
                  <li className={thirstPath == "/history" && "active"}>
                    <Link to={{pathname:`/setup/${okrtype}/history`,query:this.props.location.query}}>Lịch sử hoạt động <span className="counter unselected">6</span></Link>
                  </li>
                  {okrtype == 'group' &&
                  <li className={thirstPath == "/setupgroup" && "active"}>
                    <Link to={{pathname:`/setup/${okrtype}/setupgroup`,query:this.props.location.query}}>Thiết lập nhóm</Link>
                  </li>
                  }
                </ul>
              </div>
              <div className="pull-right">
                <div className="flex-box">
                  <div>
                    <div className="setup-okr-tab-header-text lower">50%</div>
                    <div className="setup-okr-tab-header-text">Đã đạt được</div>
                  </div>
                  <div>
                    <div className="setup-okr-tab-header-text negative">2</div>
                    <div className="setup-okr-tab-header-text">Mục Tiêu</div>
                  </div>
                  <div>
                    <div className="setup-okr-tab-header-text negative">100%</div>
                    <div className="setup-okr-tab-header-text">Đã liên kết</div>
                  </div>
                  <div>
                    <div className="setup-okr-tab-header-text negative">Hôm nay</div>
                    <div className="setup-okr-tab-header-text">Cập nhật lần cuối</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
