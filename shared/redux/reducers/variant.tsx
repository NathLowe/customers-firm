//Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


//Types
type ParfumType = string|null;
type ContenantType = string
type ContenantIndexType = number
type ContenanceType = string

export interface VariantState {
  parfum : ParfumType,
  contenant : ContenantType,
  contenance : ContenanceType,
  contenantIndex:ContenantIndexType
}


// Definitions
export const initialState = {
    parfum : null,
    contenant : 'string',
    contenance : 'string',
    contenantIndex: 0
} as VariantState

const variantSlice = createSlice({
  name: 'variant',
  initialState,
  reducers: {
    setParfum: (state, action: PayloadAction<ParfumType>) => {
      state.parfum = action.payload
    },
    setContenant: (state,action:PayloadAction<ContenantType>) => {
        state.contenant = action.payload
    },
    setContenantIndex: (state,action:PayloadAction<ContenantIndexType>) => {
        state.contenantIndex = action.payload
    },
    setContenance: (state,action:PayloadAction<ContenanceType>) => {
        state.contenance = action.payload
    },
    reinitialize: (state)=>{
        state = {...initialState}
    },
    initialize: (state,action:PayloadAction<VariantState>)=>{
      state = action.payload
    }
  },
})


//Exports
export const { setParfum, setContenant, setContenantIndex, setContenance,reinitialize,initialize } = variantSlice.actions
export default variantSlice.reducer