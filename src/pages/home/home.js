import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import './home.scss'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            backShow: false
        }
    }
    backTop(){
        window.scroll(0,0)
    }
    render(){
        return (
            <div className="home-wrap">
                <div className="home-container">
                    <img className="head-pic" alt='' src="https://upload.jianshu.io/admin_banners/web_images/4581/313b30a87782c9934e69fa46cfd7df0549e55aea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic/>
                    <List/>
                </div>
                <div className="home-side">
                    <Recommend/>
                    <Writer/>
                </div>
                {this.state.backShow ? <span className="back-top" onClick={this.backTop}>顶部</span> : null}
            </div>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
        this.bindEvent()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.changeScrollToShow.bind(this))
    }
    bindEvent(){
        window.addEventListener('scroll',this.changeScrollToShow.bind(this))
    }
    changeScrollToShow(){
        if(document.documentElement.scrollTop > 200){
            this.setState({
                backShow: true
            })
        }else{
            this.setState({
                backShow: false
            })
        }
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeData()
        dispatch(action)
    }
})

export default connect(null,mapDispatch)(Home)
