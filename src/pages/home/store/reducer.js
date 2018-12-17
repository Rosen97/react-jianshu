import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),         //统一immutable对象
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        case constants.ADD_LIST:
            return state.set('articleList',state.get('articleList').concat(action.articleList))
        default:
            return state
    }
}
