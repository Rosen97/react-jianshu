import { combineReducers } from 'redux'   //整合reducer
import { reducer as headerReducer} from '../common/header/store/index'

//将总的reducer分成若干个子reducer，模块，便于维护
const reducer = combineReducers({
    header: headerReducer
})
export default reducer
