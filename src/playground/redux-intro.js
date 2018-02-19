import { createStore } from 'redux';

// action generator
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

// implicitly returning the object and setting decrementBy, decrementBy is ES6 destructuring object
// also setting default value to 1
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// create a store

// takes first parameter as state and set default state here only
const store = createStore((state = { count: 0}, action) => {
    // returns state
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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
store.dispatch(incrementCount());

// unsubscribe();
// after the below actions, it will not log anything because we unsubscribed

// pass dynamic information in the action object
store.dispatch(incrementCount({incrementBy: 5}));

// action to decrement the count
store.dispatch(decrementCount());

// action to reset count
store.dispatch({
    type: 'RESET'
});