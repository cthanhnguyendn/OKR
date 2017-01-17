/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component,PropTypes} from 'react'
import {Modal} from 'react-bootstrap'

export default class CreateGroupModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal:false
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }
  close(){
    this.setState({showModal:false})
  }
  open(){
    this.setState({showModal:true})
  }
  render(){
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo nhóm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <label>Tên nhóm</label>
              <input className="form-control" placeholder="Nhập tên nhóm tại đây"/>
            </div>
            <div className="form-group">
              <label>Mô tả</label>
              <input className="form-control" placeholder="Nhập mô tả về nhóm tại đây"/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-positive"><i className="fa fa-check"></i>Tạo nhóm</button>
          <button className="btn btn-cancel" onClick={this.close}><i className="fa fa-times"></i>Hủy bỏ</button>
        </Modal.Footer>
      </Modal>
    )
  }
}
