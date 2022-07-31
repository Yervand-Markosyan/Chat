import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
// REDUCERS
import usersReducer from "./reducers/usersReducer"
import loggedReducer from "./reducers/loggedReducer"
import conversationReducer from "./reducers/conversationRed"
import errorReducer from "./reducers/errorREducer"
import onlineUsersReducer from "./reducers/onlineUsersReducer"

const rootReducer = combineReducers({
    setSearchUsers: usersReducer,
    setLoggedUser: loggedReducer,
    setConversations: conversationReducer,
    setError: errorReducer,
    setOnlineUsers: onlineUsersReducer
})

const store = configureStore({ reducer: rootReducer }, composeWithDevTools)


export default store

