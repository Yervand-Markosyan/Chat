import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
// REDUCERS
import usersReducer from "./reducers/usersReducer"
import loggedReducer from "./reducers/loggedReducer"
import conversationReducer from "./reducers/conversationRed"
import errorReducer from "./reducers/errorReducer"
import onlineUsersReducer from "./reducers/onlineUsersReducer"
import changeSection2Reducer from "./reducers/changeSection2Reducer"
import changeSection3Reducer from "./reducers/changeSection3Reducer"
import createGroupReducer from "./reducers/createGroupReducer"
import groupsReducer from "./reducers/groupsReducer"

const rootReducer = combineReducers({
    setSearchUsers: usersReducer,
    setLoggedUser: loggedReducer,
    setConversations: conversationReducer,
    setGroups: groupsReducer,
    setError: errorReducer,
    setOnlineUsers: onlineUsersReducer,
    setChangeSection2: changeSection2Reducer,
    setChangeSection3: changeSection3Reducer,
    setCreateGroup: createGroupReducer
})

const store = configureStore({ reducer: rootReducer }, composeWithDevTools)


export default store

