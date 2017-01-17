/**
 * Created by W540 on 1/13/2017.
 */
import React,{Component,PropTypes} from 'react'
import './HistoryTimeLine.scss'
export default class HistoryTimeLine extends Component{
  render(){
    return(
      <div>
        <ul className="okr-history-timeline">
          <li>
            <img className="timeline-user" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
            <div className="timeline-event">
              <input className="timeline-input" placeholder="Nhập bình luận và nhấn “enter” để gửi đi"/>
            </div>
          </li>
          <li>
            <img className="timeline-user" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
            <div className="timeline-event">
              <div className="timeline-system-description">
                Loc Huynh cập nhật tiến trình của kết quả “Tìm kiếm các tài liệu giàu thông tin về Oracle BI” đạt 75%
                Tiến trình của mục tiêu “Workshop nội bộ giới thiệu về ứng dụng Oracle BI” đạt 50%
              </div>
              <div className="timeline-comment">
                Không có bình luận nào được ghi lại.
              </div>
              <span className="timeline-timeago">5 phút trước</span>
              <a href="#" className="timeline-goto-detail">Xem chi tiết</a>
            </div>
          </li>
          <li>
            <img className="timeline-user" src="http://oss.seedcom.vn/upload/2016/11/22/1479789058044.jpg"/>
            <div className="timeline-event">
              <div className="timeline-system-description">
                Loc Huynh cập nhật tiến trình của kết quả “Tìm kiếm các tài liệu giàu thông tin về Oracle BI” đạt 75%
                Tiến trình của mục tiêu “Workshop nội bộ giới thiệu về ứng dụng Oracle BI” đạt 50%
              </div>
              <div className="timeline-comment">
                Không có bình luận nào được ghi lại.
              </div>
              <span className="timeline-timeago">5 phút trước</span>
              <a href="#" className="timeline-goto-detail">Xem chi tiết</a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
