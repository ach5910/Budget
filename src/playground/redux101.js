import { createStore } from 'redux';

// Action Generator - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy

});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions
//      It's output is based on its input
//      Doesn't use variables or change variables outside function score
// 2. Never change state or action

const countReducer = ((state = { count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }

});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Action is an object that gets sent to the store
store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(resetCount());
// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(decrementCount({decrementBy: 3}));
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(setCount({count: 69}));
//console.log(store.getState());