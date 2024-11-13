const { configureStore } = require('@reduxjs/toolkit');
const fetchVideoSlice = require('../reducer/fetchVideoSlice');
const { createLogger } = require('redux-logger');

const logger = createLogger();

const store = configureStore({
    reducer: {
        video: fetchVideoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;
