/**
 * Created by W540 on 1/12/2017.
 */
import React, {Component, PropTypes} from 'react'
import okrlist from 'json/okrlist.json'
import Objective from '../Objective/Objective'
import './ObjectiveList.scss'
import {SetupDeadLineModal, UpdateProgressModal,
  SetupObservableRight,LinkObjectiveModal,
  ChangeObjectiveModal,RemoveObjectiveModal,
  ChangeGravityModal,CloseObjectiveModal} from 'layouts/modal'

export default class ObjectiveList extends Component {
  // static propTypes = {
  //   objectList: PropTypes.array.isRequired
  // }
  constructor(){
    super();
    this.state = {
      showCreateInput: false
    }

    this.showCreateInput = this.showCreateInput.bind(this);
    this.hideCreateInput = this.hideCreateInput.bind(this);
    this.setUpObjectiveDeadline = this.setUpObjectiveDeadline.bind(this);
    this.linkObjective = this.linkObjective.bind(this);
    this.changeObjective = this.changeObjective.bind(this);
    this.setupObservableRight = this.setupObservableRight.bind(this);
    this.onRequestObjectiveValueChange = this.onRequestObjectiveValueChange.bind(this);

    this.removeObjective = this.removeObjective.bind(this);
    this.closeObjective = this.closeObjective.bind(this);
    this.changeGravity = this.changeGravity.bind(this);
  }
  showCreateInput(e){
    e.preventDefault()
    this.setState({showCreateInput:true})
  }
  hideCreateInput(){
    this.setState({showCreateInput:false})
  }
  componentDidUpdate(){
    if(this.state.showCreateInput){
      // TODO: may lead to performance issue (interacted with DOM every update)
      this.refs.createObjectiveInput.focus();
    }
  }
  setUpObjectiveDeadline(objective){
    this.refs.setupDeadline.open({objective});
  }
  linkObjective(objective){
    this.refs.linkObjective.open({objective});
  }

  removeObjective(objective){
    this.refs.removeObjective.open({objective});
  }
  closeObjective(objective){
    this.refs.closeObjective.open({objective});
  }
  changeGravity(objective){
    this.refs.changeGravity.open({objective});
  }


  changeObjective(objective){
    this.refs.changeObjective.open({objective});
  }
  setupObservableRight(objective){
    this.refs.observableRight.open({objective});
  }
  onRequestObjectiveValueChange({value,objective,rejectValue}){
    this.refs.updateProgress.open({value,objective,rejectValue});
  }
  render() {
    return (
      <div>
        <SetupDeadLineModal ref="setupDeadline"/>
        <UpdateProgressModal ref="updateProgress"/>
        <SetupObservableRight ref="observableRight"/>
        <LinkObjectiveModal ref="linkObjective"/>
        <ChangeObjectiveModal ref="changeObjective"/>
        <RemoveObjectiveModal ref="removeObjective"/>
        <ChangeGravityModal ref="changeGravity"/>
        <CloseObjectiveModal ref="closeObjective"/>
        <div className="row margin">
          <div className="col-xs-12">
            {
              okrlist.map((objective) => (
                <Objective
                  key={objective.objectId}
                  objective={objective}
                  setUpObjectiveDeadline={this.setUpObjectiveDeadline}
                  onRequestObjectiveValueChange={({value,rejectValue}) => {this.onRequestObjectiveValueChange({value,objective,rejectValue})}}
                  onRequestResultValueChange ={({value,rejectValue,result}) => {this.onRequestObjectiveValueChange({value,objective:result,rejectValue})}}
                  setupObservableRight= {()=>{this.setupObservableRight(objective)}}
                  linkObjective={()=>{this.linkObjective(objective)}}
                  changeObjective={this.changeObjective}
                  removeObjective={()=>{this.removeObjective(objective)}}
                  closeObjective={()=>{this.closeObjective(objective)}}
                  changeGravity={()=>{this.changeGravity(objective)}}
                />
              ))
            }
          </div>
        </div>
        <div className="row margin">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-body">
                <div className="created-panel">
                  {this.state.showCreateInput ?
                    <input ref="createObjectiveInput" onBlur={this.hideCreateInput} className="form-control" placeholder="Nhập nội dung kết quả và nhấn “enter” để tạo"/>:
                    <a href="#" onClick={this.showCreateInput}><i className="fa fa-plus"></i>  Tạo mục tiêu mới</a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
