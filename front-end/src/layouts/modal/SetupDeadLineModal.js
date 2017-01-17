/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import {DatePicker} from 'components'

export default class SetupDeadLineModal extends Component {
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
    this.setState({showModal: true,objective})
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Thiết lập thời hạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">

            <div className="col-xs-12">
              <h4>Thiết lập thời hạn</h4>
              <p>Bạn muốn thiếp lập thời hạn cho “{this.state.objective && this.state.objective.name}”?</p>
            </div>

            <div className="form-group">
              <label className="col-xs-12">Thời hạn</label>
              <div className="col-md-6 col-lg-6">
                <DatePicker placeholder="Chọn thời hạn"/>
              </div>
              <div className="col-md-6 col-lg-6">
                còn 25 ngày nữa
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
