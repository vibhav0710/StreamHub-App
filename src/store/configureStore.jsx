import { configureStore } from '@reduxjs/toolkit'
import streamhubReducer from '../features/streamhub/Slice'

const store = configureStore({
    reducer:{
        streamhubApp: streamhubReducer,
    }
})

export default store;