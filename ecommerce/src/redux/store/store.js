import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Reducer } from '../reducers/Reducer';
import { ThemeReducer } from '../reducers/ThemeReducer'

const totalReducers = combineReducers({ Reducer, ThemeReducer });
export const myStore = configureStore({ reducer: totalReducers });