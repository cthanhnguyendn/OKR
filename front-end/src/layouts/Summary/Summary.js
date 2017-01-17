/**
 * Created by W540 on 1/10/2017.
 */
import React from 'react'
import SummaryProgress from './SummaryProgress'
import ActivityHistory from './ActivityHistory/ActivityHistory'
import SummaryStatistic from './SummaryStatistic/SummaryStatistic'


export default () => (
  <div>
    <div className="row margin">
      <div className="col-xs-12 ">
        <h2 className="okr-title">OKR của tôi</h2>
      </div>
    </div>
    <div className="row margin">
      <div className="col-xs-12 ">
        <div className=" box">
          <div className="box-body ">
            <strong>Chào buổi sáng, Johnny. Chúc bạn một ngày làm việc hiệu quả!</strong>
          </div>
        </div>
      </div>
    </div>
    <div className="row margin">
      <div className="col-xs-12">
        <SummaryProgress />
      </div>
    </div>
    <div className="row margin">
      <div className="col-lg-6 col-md-6">
        <ActivityHistory />
      </div>
      <div className="col-lg-6 col-md-6">
        <SummaryStatistic />
      </div>
    </div>

  </div>
)
