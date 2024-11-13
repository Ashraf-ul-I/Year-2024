const store=require('./app/store');
const { fetchVideo1,fetchVideoTag } =require('./reducer/fetchVideoSlice')
store.subscribe(()=>{

});

store.dispatch(fetchVideo1()).then((action)=>{
    if(fetchVideo1.fulfilled.match(action)){
        store.dispatch(fetchVideoTag(action.payload))
    }
})
