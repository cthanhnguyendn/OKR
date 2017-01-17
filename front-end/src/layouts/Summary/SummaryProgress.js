/**
 * Created by W540 on 1/10/2017.
 */
import React from 'react'
import {DonutProgress,LineProgress} from 'components'
import "./SummaryProgress.scss"

export default () => (
  <div className="box">
    <div className="box-body">
      <div className="summary-progress-container">
        <div className="total-process">
          <DonutProgress progress={50}/>
        </div>

          <ul className="progress-list">
            <li>
              <span>
                Đây là mục tiêu của tôi
              </span>
              <span>
                còn 5 ngày nữa
              </span>
                <div className="progress">
                  <LineProgress width={200} progress={40}/>
                </div>

              <span>
                75%
              </span>
            </li><li>
              <span>
                Đây là mục tiêu của tôi
              </span>
              <span>
                còn 5 ngày nữa
              </span>
                <div className="progress">
                  <LineProgress width={200} progress={40}/>
                </div>

              <span>
                75%
              </span>
            </li><li>
              <span>
                Đây là mục tiêu của tôi
              </span>
              <span>
                còn 5 ngày nữa
              </span>
                <div className="progress">
                  <LineProgress width={200} progress={40}/>
                </div>

              <span>
                75%
              </span>
            </li><li>
              <span>
                Đây là mục tiêu của tôi
              </span>
              <span>
                còn 5 ngày nữa
              </span>
                <div className="progress">
                  <LineProgress width={200} progress={40}/>
                </div>

              <span>
                75%
              </span>
            </li><li>
              <span>
                Đây là mục tiêu của tôi
              </span>
              <span>
                còn 5 ngày nữa
              </span>
                <div className="progress">
                  <LineProgress width={200} progress={40}/>
                </div>

              <span>
                75%
              </span>
            </li><li>
              <span>
                Đây là mục tiêu của tôi
              </span>
              <span>
                còn 5 ngày nữa
              </span>
                <div className="progress">
                  <LineProgress width={200} progress={40}/>
                </div>

              <span>
                75%
              </span>
            </li>
            <li>
              <span>Tổng cộng 5 mục tiêu đang thực hiện</span>
            </li>
          </ul>
      </div>
    </div>
  </div>
)
