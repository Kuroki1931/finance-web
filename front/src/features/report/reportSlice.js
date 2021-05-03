import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:8000/";

export const fetchAsyncPDF_listGet = createAsyncThunk("pdf_list/get", async (token) => {
    const res = await axios.get(`${apiUrl}api/pdf/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res.data;
});

export const fetchAsyncCompnay_listGet = createAsyncThunk("company_list/get", async () => {
  const res = await axios.get(`${apiUrl}api/company/`, {
    headers: {
    },
  });
  return res.data;
});

export const fetchAsyncCompnayGet = createAsyncThunk("company/get", async (uuid) => {
  const res = await axios.get(`${apiUrl}api/company/${uuid}/`, {
    headers: {
    },
  });
  return res.data;
});


const pdfSlice = createSlice({
    name: 'pdf_info',
    initialState: {
        pdf_list: [
            {
                id: '',
                company: 0,
                pdf_type: 0,
                pdf_title: '',
                pdf: '',
                regist_date: '',
            },
        ],
        company_list: [
          {
              id: '',
              company_name: '',
              company_number: 0,
          },  
        ],
        company: {
          id: '',
          company_name: 'Please select company',
          company_number: '',
        }
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncPDF_listGet.fulfilled, (state, action) => {
          state.pdf_list = action.payload;
        });
        builder.addCase(fetchAsyncCompnay_listGet.fulfilled, (state, action) => {
          state.company_list = action.payload;
        });
        builder.addCase(fetchAsyncCompnayGet.fulfilled, (state, action) => {
          state.company = action.payload;
        });
    },
})

export const {} = pdfSlice.actions;
export const selectPDF_list = (state) => state.pdf_info.pdf_list;
export const selectCompany_list = (state) => state.pdf_info.company_list;
export const selectCompany = (state) => state.pdf_info.company;

export default pdfSlice.reducer;

