/**
 * Created by W540 on 1/12/2017.
 */
import React,{Component,PropTypes} from 'react'
import {LineProgress,CustomeToggle} from 'components'
import {Dropdown,MenuItem} from 'react-bootstrap'


import './Objective.scss'
export default class Objective extends Component{
  static propTypes = {
    objective: PropTypes.object.isRequired,
    linkObjective: PropTypes.func.isRequired,
    setUpObjectiveDeadline: PropTypes.func.isRequired,
    onRequestObjectiveValueChange: PropTypes.func.isRequired,
    onRequestResultValueChange: PropTypes.func.isRequired,
    setupObservableRight: PropTypes.func.isRequired,
    changeObjective: PropTypes.func.isRequired,
    removeObjective: PropTypes.func.isRequired,
    closeObjective: PropTypes.func.isRequired,
    changeGravity: PropTypes.func.isRequired
  }
  constructor(){
    super();
    this.state = {
      showCreateInput: false
    }
    this.showCreatedInput = this.showCreatedInput.bind(this);
    this.hideCreateInput = this.hideCreateInput.bind(this);
  }
  showCreatedInput(e){
    e.preventDefault();
    this.setState({showCreateInput:true})
  }
  hideCreateInput(e){
    e.preventDefault();
    this.setState({showCreateInput:false})
  }
  componentDidUpdate(){
    if(this.state.showCreateInput){
      // TODO: may lead to performance issue (interacted with DOM every update)
      this.refs.createObjectiveInput.focus();
    }
  }
  render(){
    return (
      <ul className="okr-object-panel">
        <li>
          <div className="okr-title">
            <div className="okr-head">
              {this.props.objective.myOkr && 'OKR của tôi'}
              {this.props.objective.parentObject && this.props.objective.parentObject.department && this.props.objective.parentObject.department.name}
              {this.props.objective.parentObject && <span>{this.props.objective.parentObject.name}</span>}
            </div>
            <div className="name">
              {this.props.objective.name}
            </div>
          </div>
          <div className="objective-deadline">
            <li className="fa fa-calendar"></li>
          </div>
          <div className="objective-link">
            <li className="fa fa-leaf"></li>
          </div>
          <div className="objective-gravity">

          </div>
          <div className="objective-progress-bar">
            <LineProgress enableControl={true} width={200} value={this.props.objective.progress} big requestValueChange={this.props.onRequestObjectiveValueChange}/>
          </div>
          <div className="objective-progress">
            {this.props.objective.progress}%
          </div>
          <div>
           <Dropdown id={`dopdown-obj-${this.props.objective.objectId}`}>
             <CustomeToggle bsRole="toggle">
               <button className="btn-icon transparent"><i className="fa fa-ellipsis-v"></i></button>
             </CustomeToggle>
             <Dropdown.Menu bsRole="menu">
               <MenuItem><i className="fa fa-info-circle" aria-hidden="true"></i> Xem chi tiết</MenuItem>
               <MenuItem onClick={this.props.linkObjective}><i className="fa fa-link" aria-hidden="true"></i> Liên kết với mục tiêu khác</MenuItem>
               <MenuItem><i className="fa fa-user" aria-hidden="true"></i> Đổi người tạo</MenuItem>
               <MenuItem onClick={this.props.setUpObjectiveDeadline}><i className="fa fa-calendar-check-o" aria-hidden="true"></i> Đặt thời hạn</MenuItem>
               <MenuItem onClick={this.props.setupObservableRight}><i className="fa fa-eye" aria-hidden="true"></i> Quyền theo dõi</MenuItem>
               <MenuItem onClick={this.props.closeObjective}><i className="fa fa-archive" aria-hidden="true"></i> Đóng</MenuItem>
               <MenuItem onClick={this.props.removeObjective}><i className="fa fa-trash" aria-hidden="true"></i> Xoá</MenuItem>
             </Dropdown.Menu>
           </Dropdown>
          </div>
        </li>
        {this.props.objective.resultList && this.props.objective.resultList.length > 0 ?
          this.props.objective.resultList.map(result => (
            <li key={result.resultId}>
              <div className="okr-title">
                <div className="result">
                  <img className="owner-image" src={result.owner.image}/>{result.name}
                </div>
              </div>
              <div className="objective-deadline"></div>
              <div className="objective-link"></div>
              <div className="objective-gravity"></div>
              <div className="objective-progress-bar">
                <LineProgress width={200} value={result.progress} requestValueChange={({value,rejectValue}) => {this.props.onRequestResultValueChange({value,rejectValue,result})}}/>
              </div>
              <div className="objective-progress">
                {result.progress}%
              </div>
              <div>
                <Dropdown id={`dropdown-result-tool-${result.resultId}`}>
                  <CustomeToggle bsRole="toggle">
                    <button className="btn-icon transparent"><i className="fa fa-ellipsis-v"></i></button>
                  </CustomeToggle>
                  <Dropdown.Menu bsRole="menu">
                    <MenuItem><i className="fa fa-info-circle" aria-hidden="true"></i> Xem chi tiết</MenuItem>
                    <MenuItem onClick={()=>{this.props.changeObjective(result)}}><i className="fa fa-link" aria-hidden="true"></i> Đổi mục tiêu</MenuItem>
                    <MenuItem><i className="fa fa-dot-circle-o" aria-hidden="true"></i> Lấy làm mục tiêu</MenuItem>
                    <MenuItem><i className="fa fa-calendar-check-o" aria-hidden="true"></i> Đặt thời hạn</MenuItem>
                    <MenuItem><i className="fa fa-archive" aria-hidden="true"></i> Đóng</MenuItem>
                    <MenuItem><i className="fa fa-trash" aria-hidden="true"></i> Xoá</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>
          ))
          :<li>
            <div>
              Chưa có kết quả trực thuộc
            </div>
          </li>
        }
        <li>
          <div>
            {this.state.showCreateInput?
              <input ref="createObjectiveInput" onBlur={this.hideCreateInput} className="form-control" placeholder="Nhập nội dung kết quả và nhấn “enter” để tạo"/>:
              <a className="create-objective-btn-link" href="#" onClick={this.showCreatedInput}><i className="fa fa-plus"></i> Tạo kết quả mới</a>
            }
          </div>
        </li>
      </ul>
    )
  }
}
