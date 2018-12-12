import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../home.scss'

class Topic extends Component{
    render(){
        return (
            <div className="topic-list">
                {
                    this.props.topicList.map((item)=>{
                        return (
                            <div key={item.get('id')} className="topic-item">
                                <img alt='' src={item.get('imgUrl')} />
                                <span>{item.get('title')}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    topicList: state.get('home').get('topicList')
})

export default connect(mapState,null)(Topic)