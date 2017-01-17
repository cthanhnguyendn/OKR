/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import {UserObjectiveSelect} from 'components/select'

export default class LinkObjectiveModal extends Component{
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
          <Modal.Title>Liên kết với mục tiêu khác</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-xs-12">
              <p>Khi liên kết thành công, mục tiêu của bạn sẽ trở thành kết quả của mục tiêu được liên kết. Hành động này sẽ ảnh hưởng đến toàn bộ tiến trình đang được thiết lập của mục tiêu đó.</p>
            </div>
            <div className="col-xs-12">
              <div className="form-group">
                <label>Liên kết với mục tiêu</label>
                <UserObjectiveSelect className="form-control" placeholder="Nhập tên người tạo và mục tiêu để tìm kiếm"/>
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
