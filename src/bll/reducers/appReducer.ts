import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

export type InitialAppStateType = {
  isInitialized: boolean
}

const initialState: InitialAppStateType = {
  isInitialized: false,
}

const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setAppInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized
    },
  },
})

export const appReducer = slice.reducer
export const setAppInitializedAC = slice.actions.setAppInitializedAC

export const isInitializedTC = createAsyncThunk("app/initialized", async ({}, thunkApi) => {
  try {
    thunkApi.dispatch(setAppInitializedAC({ isInitialized: true }))
  } catch (e) {
  } finally {
  }
})
