import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import App_bar from './features/app_bar/App_bar';
import Footer from './features/footer/Footer';
import Question from './features/question/Question';
import How_read from './features/how_read/How_read';
import Our_company from './features/our_company/Our_company';
import Ut_finance from './features/ut_finance/Ut_finance';
import Register from './features/register/Register';
import Report from './features/report/Report';
import Login from './features/login/Login';



function App() {
  return (
    <div className="App">
        <Router>
          <App_bar />
          <Route exact path='/question/' component={Question}/>
          <Route exact path='/how_read/' component={How_read}/>
          <Route exact path='/' component={Our_company}/>
          <Route exact path='/ut_finance/' component={Ut_finance}/>
          <Route exact path='/report/*/' component={Report}/>
          <Route exact path='/login/' component={Login}/>
          <Route exact path='/register/' component={Register}/>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
