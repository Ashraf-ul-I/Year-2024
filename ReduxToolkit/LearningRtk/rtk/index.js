const store = require("./app/store");
const {counterActions}=require('./features/counter/counterSlice')
const {dynamicCounterActions}=require('./features/counter/dynamicCounter')
store.subscribe(() => {
    // console.log(store.getState());
});

// disptach actions
// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

store.dispatch(dynamicCounterActions.increment(2));

store.dispatch(dynamicCounterActions.increment(4));

store.dispatch(dynamicCounterActions.decrement(3));