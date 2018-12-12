import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../home.scss'

class Writer extends Component{
    render(){
        return (
            <div className="writer-wrap">
                <div className="writer-head">
                    <span>推荐作者</span>
                    <span>换一批</span>
                </div>
                <ul className="writer-list">
                    {
                        this.props.writerList.map((item)=>{
                            return (
                                <li className="writer-item" key={item.get('id')}>
                                    <img src={item.get('imgUrl')} />
                                    <div className="info">
                                        <div>
                                            <span>{item.get('name')}</span>
                                            <i>关注</i>
                                        </div>
                                        <p>写了{item.get('codeCount')}k字.{item.get('lovedCount')}k喜欢</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button>查看全部</button>
            </div>
        )
    }
}

const mapState = (state) => ({
    writerList: state.get('home').get('writerList')
})

export default connect(mapState,null)(Writer)