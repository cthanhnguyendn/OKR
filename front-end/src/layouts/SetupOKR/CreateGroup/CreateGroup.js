/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import './CreateGroup.scss'

export default class CreateGroup extends  Component{
  render(){
    return(
      <div className="row margin">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <h4>Thông tin nhóm</h4>
                  <div className="form-group">
                    <label>Tên nhóm</label>
                    <div className="input-group">
                      <input className="form-control" placeholder="Nhập tên hoặc mã nhân viên"/>
                      <div className="input-icon">
                        <i className="fa fa-edit"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Mô tả</label>
                    <input className="form-control" placeholder="Đây là mô tả của nhóm được tạo"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h4>Thành viên  <button className="btn btn-positive"><i className="fa fa-plus"></i> Thêm thành viên</button></h4>
                </div>
                <div className="col-xs-4">
                  <div className="create-group-user">
                    <img className="group-user-image" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
                    <div className="right-info-block">
                      <div className="user-full-name">
                        Đinh Anh Huân
                      </div>
                      <div>SC00001 - Tổng giám đốc</div>
                      <div className="group-lead">Trưởng nhóm</div>
                    </div>
                    <a href="#"><i className="fa fa-times"></i></a>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="create-group-user">
                    <img className="group-user-image" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
                    <div className="right-info-block">
                      <div className="user-full-name">
                        Đinh Anh Huân
                      </div>
                      <div>SC00001 - Tổng giám đốc</div>
                    </div>
                    <a href="#"><i className="fa fa-times"></i></a>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="create-group-user">
                    <img className="group-user-image" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
                    <div className="right-info-block">
                      <div className="user-full-name">
                        Đinh Anh Huân
                      </div>
                      <div>SC00001 - Tổng giám đốc</div>
                    </div>
                    <a href="#"><i className="fa fa-times"></i></a>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="create-group-user">
                    <img className="group-user-image" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
                    <div className="right-info-block">
                      <div className="user-full-name">
                        Đinh Anh Huân
                      </div>
                      <div>SC00001 - Tổng giám đốc</div>
                    </div>
                    <a href="#"><i className="fa fa-times"></i></a>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="create-group-user">
                    <img className="group-user-image" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
                    <div className="right-info-block">
                      <div className="user-full-name">
                        Đinh Anh Huân
                      </div>
                      <div>SC00001 - Tổng giám đốc</div>
                    </div>
                    <a href="#"><i className="fa fa-times"></i></a>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="create-group-user">
                    <img className="group-user-image" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
                    <div className="right-info-block">
                      <div className="user-full-name">
                        Đinh Anh Huân
                      </div>
                      <div>SC00001 - Tổng giám đốc</div>
                    </div>
                    <a href="#"><i className="fa fa-times"></i></a>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="create-group-user">
                    <img className="group-user-image" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
                    <div className="right-info-block">
                      <div className="user-full-name">
                        Đinh Anh Huân
                      </div>
                      <div>SC00001 - Tổng giám đốc</div>
                    </div>
                    <a href="#"><i className="fa fa-times"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
