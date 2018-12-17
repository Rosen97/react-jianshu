import React, {Component} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
import '../home.scss'

class List extends Component{
    render(){
        const {getMoreList} = this.props
        return (
            <div className="article-wrap">
                <ul className="article-list">
                    {
                        this.props.articleList.map((item,index)=>{
                            return (
                               <Link to='./detail' key={index}>
                                   <li className="article-item">
                                       <span className="title">{item.get('title')}</span>
                                       <p className="content">{item.get('content')}</p>
                                       <div className="meta">
                                           <span>{item.get('author')}</span>
                                           <span>评论 {item.get('commentCount')}</span>
                                           <span>喜欢 {item.get('lovedCount')}</span>
                                       </div>
                                   </li>
                               </Link>
                            )
                        })
                    }
                </ul>
                <div className="loading-more" onClick={getMoreList}>加载更多</div>
            </div>
        )
    }
}
const mapState = (state) => ({
    articleList: state.get('home').get('articleList')
})

const mapDispatch = (dispatch) => ({
    getMoreList(){
        dispatch(actionCreators.getMoreList())
    }
})

export default connect(mapState,mapDispatch)(List)
