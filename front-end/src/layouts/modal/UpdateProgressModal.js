/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'

export default class UpdateProgressModal extends Component{
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
    this.rejectValue()
  }

  open({objective,value,rejectValue}) {
    this.setState({showModal: true,objective,value});
    this.rejectValue = rejectValue
  }
  render(){
    return(
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật tiến trình</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">

            <div className="col-xs-12">
              <h4>Cập nhật tiến trình</h4>
              <p>Bạn muốn cập nhật tiến trình của “{this.state.objective && this.state.objective.name}” từ {this.state.objective && this.state.objective.progress}% lên {this.state.value}%?</p>
            </div>
            <div className="col-xs-12">
              <div className="form-group">
                <label>Bình luận</label>
                <input className="form-control" placeholder="Nhập bình luận tại đây"/>
              </div>
            </div>


          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-positive"><i className="fa fa-check"></i>Thiết lập</button>
          <button className="btn btn-cancel" onClick={this.close}><i className="fa fa-times"></i>Hủy bỏ</button>
        </Modal.Footer>
      </Modal>
    )
  }
}
