import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice';
import pdfReducer from '../features/report/reportSlice';
import questionReducer from '../features/question_box/question_boxSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    pdf_info: pdfReducer,
    question_box: questionReducer,
  },
});
