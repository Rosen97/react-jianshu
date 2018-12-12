import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../home.scss'

class List extends Component{
    render(){
        return (
            <ul className="article-list">
                {
                    this.props.articleList.map((item)=>{
                        return (
                            <li className="article-item" key={item.get('id')}>
                                <a href="#" className="title">{item.get('title')}</a>
                                <p className="content">{item.get('content')}</p>
                                <div className="meta">
                                    <span>{item.get('author')}</span>
                                    <span>评论 {item.get('commentCount')}</span>
                                    <span>喜欢 {item.get('lovedCount')}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
const mapState = (state) => ({
    articleList: state.get('home').get('articleList')
})

export default connect(mapState,null)(List)