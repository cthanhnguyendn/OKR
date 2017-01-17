/**
 * Created by W540 on 1/13/2017.
 */
import React,{Component,PropTypes} from 'react';
import {HistoryTimeLine} from 'components'

export default class ObjectiveHistory extends Component{
  render(){
    return (
      <div className="row margin">
        <div className="col-xs-8">
          <div className="box">
            <div className="box-body">
              <HistoryTimeLine/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
