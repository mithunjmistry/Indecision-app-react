import { createStore } from 'redux';

// create a store

// takes first parameter as state and set default state here only
const store = createStore((state = { count: 0}) => {
    // returns state
    return state;
});

// we can get the state from the store by using getState
console.log(store.getState());