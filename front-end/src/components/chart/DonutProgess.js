/**
 * Created by W540 on 1/11/2017.
 */
import React,{Component, PropTypes} from 'react'
import './DonutProgress.scss'
class DonutProgress extends Component{
  static propTypes={
    progress: PropTypes.number.isRequired
  }
  constructor(){
    super();
  }
  render(){
    const {progress} = this.props;
    //Todo: find the way to cal dashArray base on R and draw 1 small circle base on progress
    const R = 90;
    const progressWidth =  10;
    const dashArrray = 501;
    const dashoffset = dashArrray - (progress/100 * dashArrray);
    const beginCircle = R * 2;
    return (
      <div className="svg radial-progress">
        <svg height={R*2} width={R*2}>
          <circle className="radial-progress-background" r={R-progressWidth} cx={R} cy={R} fill="transparent" style={{strokeDasharray:dashArrray,strokeDashoffset:"0em",strokeWidth:progressWidth*2}} ></circle>
          <circle className="radial-progress-cover" r={R-progressWidth} cx={R} cy={R} fill="transparent" style={{strokeDasharray:dashArrray,strokeDashoffset:dashoffset,strokeWidth:progressWidth*2}}></circle>
          <circle className="radial-progress-center" r={R-progressWidth} cx={R} cy={R} fill="transparent" style={{strokeDasharray:dashArrray,strokeDashoffset:"0em"}}></circle>
          <circle className="radius-circle" r={progressWidth/2} cx={R+(R-progressWidth)+(progressWidth/2)} cy="90"></circle>
        </svg>
        <div className="progress-labels">
          <div>Tổng tiến trình</div>
          <div className="number">{this.props.progress}%</div>
        </div>
      </div>
    )
  }
}

export default DonutProgress
