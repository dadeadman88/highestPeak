import { createSlice } from '@reduxjs/toolkit'
import { Others } from '../../utils/types';

const initialState: Others = {
    loading: false,
    toast: null
}

const OtherSlice = createSlice({
    name: 'Loading',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        showHideToast(state, action) {
            state.toast = action.payload;
        }
    }
})

export const { setLoading, showHideToast } = OtherSlice.actions
export default OtherSlice.reducer