import { configureStore } from '@reduxjs/toolkit'
import MenuCollapseState from './reducers/menuCollapseState'

export default configureStore({
  reducer: {
    menuCollapseState: MenuCollapseState,
  },
})