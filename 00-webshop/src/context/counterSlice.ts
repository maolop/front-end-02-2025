import { createSlice } from '@reduxjs/toolkit'
import { CartProduct } from '../models/CartProduct'



export const counterSlice = createSlice({


	
  name: 'counter',
  initialState: {
    value: findTotal()
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
		empty: state => {
			state.value = 0
		}
  }
})


	function findTotal() {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		let total = 0;
		cart.forEach((e: CartProduct) => (total += e.amount));
		return total;
	};


// Action creators are generated for each case reducer function
export const { increment, decrement, decrementByAmount, empty } = counterSlice.actions

export default counterSlice.reducer