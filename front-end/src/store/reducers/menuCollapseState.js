import { createSlice } from '@reduxjs/toolkit'

export const MenuCollapseState = createSlice({
  name: 'offCanvasState',
  initialState: {
    value: true,
  },
  reducers: {
    onChange: (state) => {
      state.value = !state.value;
    },
    onClose:(state)=>{
      state.state = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChange,onClose } = MenuCollapseState.actions

export default MenuCollapseState.reducer