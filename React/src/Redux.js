import {createStore,combineReducers} from 'redux'
import citizensReducer from './Reducers/citizens-reducer'
import employeesReducer from './Reducers/employees-reducer'
import announcementsReducer from './Reducers/announcements-reducer'

let allReducers=combineReducers({citizensReducer,employeesReducer,announcementsReducer})
let store=createStore(allReducers)

export default store