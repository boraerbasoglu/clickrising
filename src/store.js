import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/slice'
import mainReducer from './pages/HomeScreen/slice'

const middlewares = []

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`)
    //middlewares.push(logger)
}

export const store = configureStore({
    reducer: {
        app: appReducer,
        home: mainReducer,
    },
    middleware: middlewares,
})
