import React,{Component} from 'react'
import Header from 'components/Header'
import SideBar from 'components/SideBar'
import './CoreLayout.scss'
import {fetchUserInfo} from 'reducers/userReducer'
import {connect} from 'react-redux'
import {HeaderBar} from 'components'
import OKRTabBar from './OKRTabBar'
@connect((state)=>({user:state.user}))
export class CoreLayout extends Component{
  constructor(){
    super()
    this.state = {
      miniMenu: false
    }
    this.toogleMenu = this.toogleMenu.bind(this)
  }
  toogleMenu(){
    this.setState({miniMenu:!this.state.miniMenu})
  }
  componentDidMount(){
    this.props.dispatch(fetchUserInfo());
  }
  render(){
    const {location:{pathname},params} = this.props
    return(
      <div className='skin-blue'>
        <div className={`wrapper ${this.state.miniMenu && "sidebar-mini"}`}>
          <SideBar onToogleMenuStyle={this.toogleMenu} menuList={require('json/menudata.json')}/>
          <div className='content-wrapper' style={{minHeight:window.innerHeight}}>
            <HeaderBar />
            <OKRTabBar pathname={pathname} params={params}/>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
