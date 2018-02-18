import { createStore } from 'redux';

// create a store

// takes first parameter as state and set default state here only
const store = createStore((state = { count: 0}, action) => {
    // returns state
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + 1
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

// action to increment the count
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

// action to decrement the count
store.dispatch({
    type: 'DECREMENT'
});

// action to reset count
store.dispatch({
    type: 'RESET'
});
// we can get the state from the store by using getState
console.log(store.getState());