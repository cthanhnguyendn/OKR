/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import {UserObjectiveSelect} from 'components/select'

export default class CloseObjectiveModal extends Component{
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
          <Modal.Title>Đóng mục tiêu / kết quả</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-xs-12">
              <p>Bạn muốn đóng <strong>“{this.state.objective && this.state.objective.name}”</strong>?</p>
              <p>Lưu ý: Hành động này sẽ làm cho những người liên quan không thể cập nhật được tiến trình hoặc bình luận trên nội dung này nữa.</p>
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
          <button className="btn btn-positive"><i className="fa fa-check"></i>Đóng</button>
          <button className="btn btn-cancel" onClick={this.close}><i className="fa fa-times"></i>Hủy bỏ</button>
        </Modal.Footer>
      </Modal>
    )
  }
}
