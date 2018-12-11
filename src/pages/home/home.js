import React, {Component} from 'react'
import Topic from './components/Topic'
import './home.scss'

class Home extends Component{
    render(){
        return (
            <div className="home-wrap">
                <div className="home-container">
                    <img alt='' src="https://upload.jianshu.io/admin_banners/web_images/4581/313b30a87782c9934e69fa46cfd7df0549e55aea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic/>
                </div>
                <div className="home-side">home-side</div>
            </div>
        )
    }
}

export default Home