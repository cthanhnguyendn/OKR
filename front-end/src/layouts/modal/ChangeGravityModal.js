/**
 * Created by W540 on 1/16/2017.
 */
import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import {UserObjectiveSelect} from 'components/select'

export default class ChangeGravityModal extends Component{
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
          <Modal.Title>Thiết lập tỉ trọng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-xs-12">
              <p>Bạn đang thiết lập tỉ trọng của các kết quả trong mục tiêu <strong>“{this.state.objective && this.state.objective.name}”</strong>?</p>
              <p>Lưu ý: Tỉ trọng của các kết quả có thể không đồng đều nhưng tổng tỉ trọng phải bằng 100%</p>
            </div>
            <div className="col-xs-12">
              {this.state.objective &&
              <ul>
                {this.state.objective.resultList.map(result => (
                  <li>
                    <div>{result.name}</div>
                    <div><input className="form-control"/></div>
                    <div>{result.progress}</div>
                  </li>
                ))}
                <li>
                  <div>TỔNG CỘNG</div>
                  <div>100%</div>
                </li>
              </ul>
              }
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger"><i className="fa fa-check"></i>Đóng</button>
          <button className="btn btn-cancel" onClick={this.close}><i className="fa fa-times"></i>Hủy bỏ</button>
        </Modal.Footer>
      </Modal>
    )
  }
}
