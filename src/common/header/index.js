import React, { Component } from 'react'
import { connect } from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import { actionCreators } from './store'
import './index.scss'

class Header extends Component{
    getListArea(){
        const {focused, recommendList, page, totalPage, mouseIn, changePage} = this.props   //解构赋值
        const newList = recommendList.toJS()
        const pageList = []
        if(newList.length){
            for(let i = (page-1) * 10; i < page * 10; i++){
                pageList.push(
                    <i key={newList[i]}>{newList[i]}</i>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <div 
                    className="search-recommend" 
                    onMouseEnter={this.props.mouseEnter}
                    onMouseLeave={this.props.mouseLeave}
                >
                    <div className="recommend-head">
                        <span>热门搜索<i className="iconfont">&#xe603;</i></span>
                        <span className="change-list" onClick={() => changePage(page,totalPage)}>换一批</span>
                    </div>
                    <div className="recommend-list">
                        {pageList}
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
    render() {
        const {focused, recommendList, inputFocus, inputBlur} = this.props   //解构赋值
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
                                    in={focused}
                                    timeout={200}
                                    classNames="slide"
                                >
                                    <input
                                        placeholder="搜索"
                                        onFocus={() => inputFocus(recommendList)}
                                        onBlur={inputBlur}
                                        className={focused ? 'focused' : ''}
                                    />
                                </CSSTransition>
                                <i className={focused ? 'iconfont active' : 'iconfont'}>&#xe651;</i>
                                {this.getListArea()}
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
}
//状态映射
const mapStateToProps = (state) => {
    return {
        //immutable对象对数据进行操作
        focused: state.getIn(['header','focused']),
        // 等价focused: state.get('header').get('focused')
        recommendList: state.getIn(['header','recommendList']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
}

//方法映射
const mapDispatchToProps = (dispatch) => {
    return {
        //聚焦
        inputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList())   
            }
            dispatch(actionCreators.searchFocus())
        },
        //失焦
        inputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        mouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        mouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        //换一批
        changePage(page,totalPage){
            let currentPage = 0
            if(page < totalPage){
                currentPage = page + 1
            }else{
                currentPage = 1
            }
            dispatch(actionCreators.changePage(currentPage))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
