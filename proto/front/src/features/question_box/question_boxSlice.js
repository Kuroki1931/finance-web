import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:8000/";

export const fetchAsyncAsk_listGet = createAsyncThunk("ask_list/get", async (token) => {
    const res = await axios.get(`${apiUrl}api/ask/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res.data;
});

export const fetchAsyncQuestion_listGet = createAsyncThunk("question_list/get", async () => {
  const res = await axios.get(`${apiUrl}api/question/`, {
    headers: {
    },
  });
  return res.data;
});


const questionSlice = createSlice({
    name: 'question_box',
    initialState: {
        question_list: [
            {
                id: '',
                title: '',
                question: '',
                regist_date: '',
            },
        ],
        ask_list: [
          {
              id: '',
              askto: '',
              ask: '',
              regist_date: '',
              
          },   
        ],
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncAsk_listGet.fulfilled, (state, action) => {
          state.ask_list = action.payload;
        });
        builder.addCase(fetchAsyncQuestion_listGet.fulfilled, (state, action) => {
          state.question_list = action.payload;
        });
    },
})

export const {} = questionSlice.actions;
export const selectAsk_list = (state) => state.question_box.ask_list;
export const selectQuestion_list = (state) => state.question_box.question_list;

export default questionSlice.reducer;


