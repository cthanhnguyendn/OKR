/**
 * Created by W540 on 12/21/2016.
 */
import React,{Component, PropTypes} from 'react'
export default class SideBar extends Component{
  static propTypes = {
    onToogleMenuStyle: PropTypes.func.isRequired,
    menuList: PropTypes.array.isRequired
  }
  constructor(){
    super();
    this.state = {
      mini:false,
      activeIndex:0
    }
    this.createHoverHandle = this.createHoverHandle.bind(this);
  }
  createHoverHandle(){
    return {
      onMouseEnter: () => {
        this.setState({mini:false})
      },
      onMouseLeave: () => {
        this.setState({mini:true})
      }
    }
  }
  render(){
    return(
      <aside className="oss-main-sidebar">
        <section className="oss-sidebar">
          <button onClick={this.props.onToogleMenuStyle} className="btn btn-icon pin-menu-button" id="pin-oss-menu-button">
            <i className="fa fa-caret-left"></i>
          </button>
          <ul className={this.state.mini? "oss-sidebar-menu mini": "oss-sidebar-menu"}  {...this.createHoverHandle()}>
            <li className="head">
              <span className="small-logo"><a href="./index.html">OSS</a></span>
              <span className="logo">SeedCom</span>
              <i className="fa fa-caret-down"></i>
            </li>
            <li className="add-action">
              <div className="btn-group">
                <button className="btn btn-add dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span className="text">TRUY CẬP NHANH</span>
                  <span className="small-icon">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </span>
                </button>
                <ul className="dropdown-menu">
                  <li>Tạo đơn hàng online</li>
                  <li>Tạo đơn cửa hàng</li>
                  <li>Phiếu nghỉ phép</li>
                  <li>Phiếu chuyển kho</li>
                </ul>
              </div>
            </li>
            {
              this.props.menuList.map((item,index) => (
                <li className="treeview" key={index}>
                  <a href="#">
                    <span className="menu-icon">
                        <i className={`fa ${item.faIconClass}`} aria-hidden="true"></i>
                    </span>
                    <span className="menu-text">{item.title}</span>
                  </a>
                  <ul className="treeview-menu">
                    {
                      item.subMenu.map(subItem => (
                        <li key={subItem.title}><a href="#">{subItem.title}</a></li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
          <ul className="oss-slide-submenu">
            <li className="active">
              <a href="#">GÓC CỦA TÔI</a>
              <ul>
                <li><a href="#">Bảng tin </a></li>
                <li><a href="#">Lịch làm việc</a></li>
                <li><a href="#">Hộp thư</a></li>
                <li><a href="./page/leave.html">Nghĩ phép</a></li>
                <li><a href="#">Chấm công</a></li>
                <li><a href="#">Nhóm của tôi</a></li>
                <li><a href="#">Phiếu phê duyệt</a></li>
              </ul>
            </li>
          </ul>

        </section>
      </aside>
    )
  }
}
