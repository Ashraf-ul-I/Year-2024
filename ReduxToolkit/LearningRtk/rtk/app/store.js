const configureStore=require('@reduxjs/toolkit').configureStore;
const counterSlice=require('../features/counter/counterSlice.js')
const dynamicCounterSlice=require('../features/counter/dynamicCounter.js')
const  {createLogger}=require('redux-logger')
const logger=createLogger()
const store=configureStore({
    reducer:{
        counter:counterSlice,
        dynamicCounter:dynamicCounterSlice
    },
    middleware:(getDefaultMiddleWares)=>getDefaultMiddleWares().concat(logger)
})

module.exports=store;