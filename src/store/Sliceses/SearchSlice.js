import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: '',
}

export const SearchValueSlice = createSlice({
    name: 'searchValue',
    initialState,
    reducers: {
        searchVal: (state, action) => {
            state.text = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { searchVal } = SearchValueSlice.actions

export default SearchValueSlice.reducer