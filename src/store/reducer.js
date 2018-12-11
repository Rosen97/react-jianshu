import { combineReducers } from 'redux-immutable'   //整合reducer
import { reducer as headerReducer } from '../common/header/store/index'
import { reducer as homeReducer } from '../pages/home/store/index'

//将总的reducer分成若干个子reducer，模块，便于维护
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})
export default reducer
