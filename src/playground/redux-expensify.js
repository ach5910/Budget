import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import EditExpensePage from '../components/EditExpensePage';

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE

const editExpense = ( id, updates) =>  ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});
// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    startDate: date
});

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    endDate: date
});
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ] //state.push(action.expenses) would change state state.concat creates a new array
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>  id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

// Filters Reducer
const filerReducerDefaultSate = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filerReducerDefaultSate, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    };
};

// Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount > b.amount ? -1 : 1;
        }
    });
}

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visisbleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visisbleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500}));

// store.dispatch(setTextFilter(''));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setStartDate(1250));
// store.dispatch(setStartDate());
// console.log(expenseOne);
const demoState = {
    expenses: [{
        id: 'acaadfa',
        description: 'January Rent',
        note: 'This is the final payment',
        amount: 54340,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user,
//     location: 'Cuse',
//     age: 27
// })