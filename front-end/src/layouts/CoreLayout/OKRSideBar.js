import React from 'react'
import './OKRSideBar.scss'
import {Link} from 'react-router'
export default ({params,location,okrGroup,createGroup}) => {
  const okrtype = params.okrtype;
  const groupId = location.query.groupid;
  const listGroup = okrGroup.listGroup
  // parse 3 pathname
  const pathSplit = location.pathname.match(/^(\/[^\/]+)(\/[^\/]+)?(\/[^\/]+)?/i);
  const firstPath = pathSplit[1];
  const finalPath = pathSplit.length > 3 && pathSplit[3];
  return (
    <ul className="okr-sidebar">
      <li className={okrtype == "myokr" && "active"}>
        <Link to={`${firstPath}/myokr${finalPath ? `${finalPath}` : ""}`}>
          <img className="user-image" src="img/user2-160x160.jpg"/>
          OKR của tôi
        </Link>
      </li>
      <li className={okrtype == "seedcom" && "active"}>
        <Link to={`${firstPath}/seedcom${finalPath ? `${finalPath}` : ""}`}>
          <span className="round-icon"><i className="fa fa-calculator"></i></span>
          Seedcom
        </Link>
      </li>
      <li className={okrtype == "department" && "active"}>
        <Link to={`${firstPath}/department${finalPath ? `${finalPath}` : ""}`}><span className="round-icon"><i className="fa fa-calculator"></i></span>
          Product
        </Link>
      </li>
      <li>
        <div className="pull-left">
          <strong>ĐANG THEO DỎI</strong>
        </div>
        <div className="pull-right">
          <a href="#" onClick={(e)=>{createGroup()}} className="create-group-link"><i className="fa fa-plus"></i>Tạo nhóm mới</a>
        </div>
      </li>
      {listGroup && listGroup.map(group => (
        <li key={group.groupId} className={okrtype == "group" && groupId==group.groupId && "active"}>
          <Link to={{pathname:`${firstPath}/group${finalPath ? `${finalPath}` : ""}`,query:{groupid:group.groupId}}}>
            <span className="round-icon"><i className="fa fa-users"></i></span>
            {group.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
