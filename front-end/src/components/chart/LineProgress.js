/**
 * Created by W540 on 1/11/2017.
 */
import React, {Component, PropTypes} from 'react'
import Slider from 'rc-slider'
import './LineProgress.scss'
export default class LineProgress extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    disable: PropTypes.bool,
    big: PropTypes.bool,
    requestValueChange: PropTypes.func
  }
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }
    this.onChange = this.onChange.bind(this)
    this.onAfterChange = this.onAfterChange.bind(this)
  }
  onChange(value){
    this.setState({value})
  }
  onAfterChange(){
    if(this.props.requestValueChange){
      this.props.requestValueChange({value:this.state.value,rejectValue:()=>{
        this.setState({value:this.props.value})
      }})
    }
  }

  onBeforeChange(){
    this.beforeValue = this.state.value;
  }
  render() {
    const progressClass = this.state.value > 0 ? this.state.value < 50 ? 'progress-low' : 'progress-hight' : '';
    return (
      <Slider
        prefixCls="progress-slider"
        className={`${this.props.big && "big-progress"} ${progressClass}`}
        onChange={this.onChange}
        value={this.state.value}
        onAfterChange={this.onAfterChange}
      />
    )
  }
}
