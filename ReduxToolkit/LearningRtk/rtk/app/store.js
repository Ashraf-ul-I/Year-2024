const configureStore=require('@reduxjs/toolkit').configureStore;
const counterSlice=require('../features/counter/counterSlice.js')
const dynamicCounterSlice=require('../features/counter/dynamicCounter.js')
const  {createLogger}=require('redux-logger')
const logger=createLogger()
const postReducer=require('../post/postSlice.js')
const store=configureStore({
    reducer:{
        counter:counterSlice,
        dynamicCounter:dynamicCounterSlice,
        post:postReducer

    },
    middleware:(getDefaultMiddleWares)=>getDefaultMiddleWares().concat(logger)
})

module.exports=store;