/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import {UserSelect} from 'components/select'

export default class ChangeUserObjectiveModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close() {
    this.setState({showModal: false})
  }

  open({objective}) {
    this.setState({showModal: true,objective});
  }
  render(){
    return(
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi người thực hiện</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <label>Liên kết với mục tiêu</label>
                <UserSelect className="form-control" placeholder="Nhập tên người tạo và mục tiêu để tìm kiếm"/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-positive"><i className="fa fa-check"></i>Liên kết</button>
          <button className="btn btn-cancel" onClick={this.close}><i className="fa fa-times"></i>Hủy bỏ</button>
        </Modal.Footer>
      </Modal>
    )
  }
}
