/**
 * Created by W540 on 1/11/2017.
 */
import React,{Component,PropTypes} from 'react'
import './SummaryStatistic.scss'
export default class SummaryStatistic extends Component{
  render(){
    return(
      <div className="box summary-statistic-widget">
        <div className="box-header">
          <strong>Thống kê chung</strong>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="statistic-text">
                40
              </div>
              <div className="statistic-name">
                Mục tiêu đã được tạo
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="statistic-text">
                80%
              </div>
              <div className="statistic-name">
                Mục tiêu được liên kết
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="statistic-text">
                20 <span className="sub-text">(50%)</span>
              </div>
              <div className="statistic-name">
                Mục tiêu được đóng
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="statistic-text">
                10 <span className="sub-text">(25%)</span>
              </div>
              <div className="statistic-name">
                Mục tiêu bị trể hẹn
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
