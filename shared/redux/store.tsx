// Imports
import { configureStore } from '@reduxjs/toolkit'
import variantReducer from '@shared/redux/reducers/variant'

// Definitions
const store = configureStore({
  reducer: {
      variant: variantReducer
  },
})


export default store