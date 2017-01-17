/**
 * Created by W540 on 1/10/2017.
 */
import React from 'react'
import {Link} from 'react-router'
export default ({pathname,params}) => {
  const firstPath = pathname && pathname.match(/^\/[^\/]+/g)[0];
  const okrtype = params.okrtype;
  return(
    <div className="header-tabs">
      <ul className="nav nav-tabs">
        <li className={firstPath == "/summary" && "active"}>
          <Link to={`/summary/${okrtype}`}>Tổng quan</Link>
        </li>
        <li className={firstPath == "/setup" && "active"}>
          <Link to={`/setup/${okrtype}`}>Thiết lập OKR</Link>
        </li>
        <li className={firstPath == "/okrmap" && "active"}>
          <a href="#">Sơ đồ OKR</a>
        </li>
      </ul>
    </div>
  )
}
