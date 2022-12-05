import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PagesDataType } from "../state-app/textData"
import { textDataEN } from "../state-app/textData"
const initialState = textDataEN.EN()
const slice = createSlice({
  name: "dataPages",
  initialState: initialState,
  reducers: {
    getDataPages(state, action: PayloadAction<{ data: PagesDataType }>) {
      return action.payload.data
    },
  },
})

export const pagesReducer = slice.reducer
export const getDataPages = slice.actions.getDataPages

export const getUsersTC = createAsyncThunk("dataPages/getData", async (data: PagesDataType, thunkApi) => {
  try {
    thunkApi.dispatch(getDataPages({ data }))
  } catch (e) {
    console.log("Can't to get dataPages. Check pagesReducer or dispatch AsyncThunk getUser")
  }
})
