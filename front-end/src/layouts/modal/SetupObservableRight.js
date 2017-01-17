/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import {DatePicker} from 'components'

export default class SetupObservableRight extends Component {
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
          <Modal.Title>Quyền theo dõi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">

            <div className="col-xs-12">
              <h4>Quyền theo dõi</h4>
              <p>Bạn muốn thiếp lập quyền theo dõi cho “{this.state.objective && this.state.objective.name}”?</p>
            </div>

            <div className="col-xs-12">
              <div>
                <div className="radio-control">
                  <input type="radio" id="observableRight-all"  name="observableRight" />
                  <label htmlFor="observableRight-all"></label>
                </div> Tất cả mọi người
              </div>
              <div>
                <div className="radio-control">
                  <input type="radio" id="observableRight-2"  name="observableRight" />
                  <label htmlFor="observableRight-2"></label>
                </div> Cấp trên có thể xem
              </div>
              <div>
                <div className="radio-control">
                  <input type="radio" id="observableRight-3"  name="observableRight" />
                  <label htmlFor="observableRight-3"></label>
                </div> Người liên quan xem được 1 cấp liền kề
              </div>
              <div>
                <div className="radio-control">
                  <input type="radio" id="observableRight-4"  name="observableRight" />
                  <label htmlFor="observableRight-4"></label>
                </div> Chỉ mình tôi
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
