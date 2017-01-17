/**
 * Created by W540 on 1/11/2017.
 */
import React,{Component,PropTypes} from 'react'
import './ActivityHistory.scss'
export default class ActivityHistory extends Component{
  render(){
    return (
      <div className="box activity-history">
        <div className="box-header">
          <div className="flex-box space-between flex-center">
            <span>
              <strong>Lịch sử hoạt động</strong>
              <span className="counter selected">4</span>
            </span>
            <div>
              <button className="btn btn-post">
                Xem tất cả
              </button>
            </div>
          </div>
        </div>
        <div className="box-body">
            <ul className="activity-timeline">
              <li>
                <img className="users" src="img/user2-160x160.jpg"/>
                <div>
                  <div><a href="#">Jorge Fowler</a> đã bình luận trên <a href="#">Thống kê hồ sơ khách hàng</a> </div>
                  <div>Cái này không ổn lắm, cần phải điều chỉnh lại</div>
                </div>
              </li><li>
                <img className="users" src="img/user2-160x160.jpg"/>
                <div>
                  <div><a href="#">Jorge Fowler</a> đã bình luận trên <a href="#">Thống kê hồ sơ khách hàng</a> </div>
                  <div>Cái này không ổn lắm, cần phải điều chỉnh lại</div>
                </div>
              </li><li>
                <img className="users" src="img/user2-160x160.jpg"/>
                <div>
                  <div><a href="#">Jorge Fowler</a> đã bình luận trên <a href="#">Thống kê hồ sơ khách hàng</a> </div>
                  <div>Cái này không ổn lắm, cần phải điều chỉnh lại</div>
                </div>
              </li><li>
                <img className="users" src="img/user2-160x160.jpg"/>
                <div>
                  <div><a href="#">Jorge Fowler</a> đã bình luận trên <a href="#">Thống kê hồ sơ khách hàng</a> </div>
                  <div>Cái này không ổn lắm, cần phải điều chỉnh lại</div>
                </div>
              </li><li>
                <img className="users" src="img/user2-160x160.jpg"/>
                <div>
                  <div><a href="#">Jorge Fowler</a> đã bình luận trên <a href="#">Thống kê hồ sơ khách hàng</a> </div>
                  <div>Cái này không ổn lắm, cần phải điều chỉnh lại</div>
                </div>
              </li><li>
                <img className="users" src="img/user2-160x160.jpg"/>
                <div>
                  <div><a href="#">Jorge Fowler</a> đã bình luận trên <a href="#">Thống kê hồ sơ khách hàng</a> </div>
                  <div>Cái này không ổn lắm, cần phải điều chỉnh lại</div>
                </div>
              </li><li>
                <img className="users" src="img/user2-160x160.jpg"/>
                <div>
                  <div><a href="#">Jorge Fowler</a> đã bình luận trên <a href="#">Thống kê hồ sơ khách hàng</a> </div>
                  <div>Cái này không ổn lắm, cần phải điều chỉnh lại</div>
                </div>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}
