/**
 * Created by W540 on 1/12/2017.
 */
import React,{Component,PropTypes} from 'react';

export default class CustomeToggle extends Component{
  constructor(props, context){
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    if (this.props.onClick){this.props.onClick(e)};
  }
  render() {
    return (
      <span onClick={this.handleClick}>
        {this.props.children}
      </span>
    );
  }
}
