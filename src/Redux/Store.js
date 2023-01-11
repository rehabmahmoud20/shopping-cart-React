import {configureStore} from '@reduxjs/toolkit'
import {Counterslice} from './Counterslice'
import {shoppingslice} from './shoppingslice'
import {authinticationslice} from './authonticationslice'

export const Store = configureStore({
 reducer :{
counter : Counterslice.reducer,
cartAmount:shoppingslice.reducer,
auth:authinticationslice.reducer

 }
})

