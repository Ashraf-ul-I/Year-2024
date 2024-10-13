const counterEl = document.getElementById("counter");
const incrementEle = document.getElementById("increment");
const decrementEle = document.getElementById("decrement");


const INCREMENT='increment';
const DECREMENT='decrement';

const increments={
    type:INCREMENT,
    payload:1
}

const decrements={
    type:DECREMENT,
    payload:1
}

const initialState={
    value:0
}

const counterReducer=(state=initialState,action)=>{
   
    if(action.type===INCREMENT){
       return{
        ...state,
        value:state.value+action.payload
       }
    }else if(action.type===DECREMENT){
        return{
            ...state,
            value:state.value-action.payload
        }
    }else{
        return state
    }
}


const store=React.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

render();

store.subscribe(render);

// Button click listeners
incrementEle.addEventListener('click', () => {
    store.dispatch(increments(5));
});

decrementEle.addEventListener('click', () => {
    store.dispatch(decrements(5));
});


   