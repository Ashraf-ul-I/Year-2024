// reducer/fetchVideoSlice.js
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
    loading: false,
    video: [],
    error: ''
};

const fetchVideo1 = createAsyncThunk('get/fetchVideo', async () => {
    const response = await fetch('http://localhost:9000/videos');
    const data = await response.json();
    return data;
});

const fetchVideoTag = createAsyncThunk('get/fetchVideoTag', async (videoObject) => {
    let tags=videoObject.tags;
    const baseUrl='http://localhost:9000/videos'
    const url=new URL(baseUrl)
    tags.forEach(tag=>url.searchParams.append('tags_like',tag));
    const response = await fetch(url.toString());
    const data = await response.json();
    // data.sort((a,b)=>{
    //     if(b.views>a.views){
    //         return 1
    //     }
    //     if(b.views<a.views){
    //         return -1
    //     }
    // })

    const sortedData = data.sort((a, b) => {
        // Function to convert views string (e.g., "7.3k") to a number
        const parseViews = (views) => {
            if (views.includes('k')) {
                return parseFloat(views) * 1000; // Convert "7.3k" to 7300
            }
            return parseFloat(views); // In case it's already a number like "1500"
        };

        const viewsA = parseViews(a.views);
        const viewsB = parseViews(b.views);

        return viewsB - viewsA; // Sorting in descending order
    });

    return sortedData;
});

const fetchVideoSlice = createSlice({
    name: 'fetchVideos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo1.pending, (state) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchVideo1.fulfilled, (state, action) => {
            state.loading = false;
            state.video = action.payload;
        });
        builder.addCase(fetchVideo1.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        //for videoTag

        builder.addCase(fetchVideoTag.pending, (state) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchVideoTag.fulfilled, (state, action) => {
            state.loading = false;
            state.video = action.payload;
        });
        builder.addCase(fetchVideoTag.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

module.exports = fetchVideoSlice.reducer;
module.exports.fetchVideo1 = fetchVideo1;
module.exports.fetchVideoTag = fetchVideoTag;