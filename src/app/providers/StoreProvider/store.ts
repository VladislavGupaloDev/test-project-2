import { baseApi } from '@/shared/api'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({ [baseApi.reducerPath]: baseApi.reducer })

export type RootState = ReturnType<typeof rootReducer>
export type InitialState = Partial<RootState>

export const createReduxStore = (initialState?: InitialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: GetDefaultMiddleware =>
      GetDefaultMiddleware().concat(baseApi.middleware)
  })
}

//* Для локальных сторов + хуки добавить
// type StoreType = ReturnType<typeof createReduxStore>
// export type AppDispatch = StoreType['dispatch']
