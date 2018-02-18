import { createStore } from 'redux';

// create a store

// takes first parameter as state and set default state here only
const store = createStore((state = { count: 0}, action) => {
    // returns state
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }

});

// Action - sends an object to the store
// we will have actions like increment, decrement etc.
// action are sent using the dispatch method on the store

// watch for changes in the store instead of manually getting the state
// also we can unsubscribe from the changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// action to increment the count
store.dispatch({
    type: 'INCREMENT'
});

// unsubscribe();
// after the below actions, it will not log anything because we unsubscribed

// pass dynamic information in the action object
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// action to decrement the count
store.dispatch({
    type: 'DECREMENT'
});

// action to reset count
store.dispatch({
    type: 'RESET'
});