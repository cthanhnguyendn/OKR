import React,{Component,PropTypes} from 'react'
import './HomeView.scss'
import OKRSideBar from '../CoreLayout/OKRSideBar'
import {connect} from 'react-redux'
import CreateGroupModal from 'layouts/modal/CreateGroupModal'

@connect(state => ({okrGroup:state.okrGroup}))
export default class OKRSideBarView extends Component{
  constructor(){
    super();
    this.createGroup =this.createGroup.bind(this)
  }
  createGroup(){
    this.refs.createGroup.open()
  }
  render(){
    const {children,params,location,okrGroup} = this.props;
    return(
      <div className="okr-container">
        <CreateGroupModal ref="createGroup"/>
        <div className="okr-side-bar" style={{minHeight:window.innerHeight-100}}>
          <OKRSideBar params={params} location={location} okrGroup={okrGroup} createGroup={this.createGroup}/>
        </div>
        <div className="okr-right-content">
          {children}
        </div>
      </div>)
  }
}
