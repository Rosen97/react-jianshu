import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
    type: constants.CHANGELIST,
    data: fromJS(data),    //将普通数组对象转化为immutable对象
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur= () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

//使用redux-thunk可以在dispatch事件返回一个函数
export const getList = () => {
    return (dispatch) => {
       axios.get('/api/headerList.json').then((res)=>{
           dispatch(changeList(res.data.data))
       }).catch((err) => {
           console.log(err)
       })
    }
}
