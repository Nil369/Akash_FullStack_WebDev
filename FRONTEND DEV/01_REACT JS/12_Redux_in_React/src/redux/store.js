import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

/*
Store - is what holds all the data your application uses.
Reducer - is what manipulates that data when it receives an action.
Action - is what tells reducer to manipulate the store data, it carries the name and (optionally) some data.
Dispatch -> Way how we execute the action. eg: Dispatch the action to the reducer. Then reducer will check what to do and the store gets updated.
Reducer is usually in the format of a switch statement that switches between all possible Actions (cases) and then manipulates
the Store data based on the action. When reducer data changes within redux, the properties in your components are changed and then the re-rendering occurs.
*/