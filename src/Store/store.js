import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import {addRollNumReducer,addMarksReducer,getStudentReducer} from '../Reducers/reducer'


const reducer = combineReducers({
    rollNum: addRollNumReducer,
    marks: addMarksReducer,
    getId : getStudentReducer
})

const middleware= [thunk]

const store = createStore(
    reducer, applyMiddleware(...middleware)
)

export default store;