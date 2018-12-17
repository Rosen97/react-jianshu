import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

const addList = (list) => ({
    type: constants.ADD_LIST,
    articleList: fromJS(list)
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            console.log(res.data)
            const list = res.data.data
            dispatch(changeHomeData(list))
        })
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/moreList.json').then((res)=>{
            console.log(res)
            dispatch(addList(res.data.data.articleList))
        })
    }
}
