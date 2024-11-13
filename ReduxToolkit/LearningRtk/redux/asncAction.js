const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").thunk

const initialState = {
    loading: false,
    post: [],
    error: ''
};

// Actions
const fetchPostsRequested = () => ({
    type: 'posts/requested',
});

const fetchPostsSucceeded = (posts) => ({
    type: 'posts/succeeded',
    payload: posts
});

const fetchPostsFailed = (error) => ({
    type: 'posts/failed',
    payload: error
});

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "posts/requested":
            return {
                ...state,
                loading: true,
                error: ''
            };
        case "posts/succeeded":
            return {
                ...state,
                loading: false,
                error: '',
                post: action.payload
            };
        case 'posts/failed':
            return {
                ...state,
                loading: false,
                error: action.payload.message
            };
        default:
            return state;
    }
};

// Thunk function
const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequested());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const posts = await response.json();
            dispatch(fetchPostsSucceeded(posts));
        } catch (error) {
            dispatch(fetchPostsFailed(error));
        }
    };
};

// Create store with middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch the thunk action
store.dispatch(fetchPosts());
