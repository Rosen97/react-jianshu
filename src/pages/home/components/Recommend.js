import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../home.scss'

class Recommend extends Component{
    render(){
        return (
            <div className="recommend-list">
                {
                    this.props.recommendList.map((item)=>{
                        return (
                            <a herf={item.get('href')} key={item.get('id')}>
                                <img src={item.get('imgUrl')} />
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    recommendList: state.get('home').get('recommendList')
})

export default connect(mapState,null)(Recommend)