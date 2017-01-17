/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import DatePicker from 'react-bootstrap-date-picker'
export default class CustomeDatePicker extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  }

  constructor() {
    super();
    const value = new Date().toISOString();
    this.state = {
      value: value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
    if(this.props.onChange){
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div className="input-group">
        <DatePicker id={this.props.id} placeholder={this.props.placeholder} showClearButton={false}
                    className="form-control" value={this.state.value} onChange={this.handleChange}/>
        <div className="input-icon">
          <i className="fa fa-calendar"></i>
        </div>
      </div>
    )
  }
}
