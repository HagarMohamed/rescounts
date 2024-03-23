
import rootRedusers from "../reducers/rootRedusers"
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';


 const initialState = {

 }
 const middleware = [thunk]
 

 const store = configureStore({ reducer: rootRedusers}, applyMiddleware(thunk));

export default store;

