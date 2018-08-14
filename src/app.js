import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log('state', state);
    const visisbleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visisbleExpenses);
});
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 45000}));
// store.dispatch(addExpense({ description: 'Rent', createdAt: 1000}));
// store.dispatch(addExpense({ description: 'Water Bill', amount: 109500}));
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})

