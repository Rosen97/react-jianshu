import React, { Component } from 'react'
import { connect } from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import { actionCreators } from './store'
import './index.scss'

class Header extends Component{
    render() {
        return (
            <div className="nav-bar">
                <div className="width-limit">
                    <a href="./" className="logo">
                        <img alt="" src={require('../../static/logo.png')} />
                    </a>
                    <div className="container">
                        <ul>
                            <li className="active">首页</li>
                            <li>下载App</li>
                            <li>
                                <CSSTransition
                                    in={this.props.focused}
                                    timeout={200}
                                    classNames="slide"
                                >
                                    <input
                                        placeholder="搜索"
                                        onFocus={this.props.inputFocus}
                                        onBlur={this.props.inputBlur}
                                        className={this.props.focused ? 'focused' : ''}
                                    />
                                </CSSTransition>
                                <i className="icon icon-sousuo"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-groups">
                        <span>注册</span>
                        <span>写文章</span>
                    </div>
                </div>
            </div>
        )
    }
    inputFocus(){
        this.setState({
            focused: true
        })
    }
    inputBlur(){
        this.setState({
            focused: false
        })
    }
}
//状态映射
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

//方法映射
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocus(){
            dispatch(actionCreators.searchFocus())
        },
        inputBlur(){
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
