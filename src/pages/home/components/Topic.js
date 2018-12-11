import React, {Component} from 'react'
import { connect } from 'react-redux'

class Topic extends Component{
    render(){
        return (
            <div>
                {
                    this.props.topicList.map((item)=>{
                        return (
                            <div key={item.get('id')}>
                                <span>{item.get('title')}</span>
                                <img alt='' src={item.get('imgUrl')} />
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