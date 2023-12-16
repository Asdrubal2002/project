import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home/home';
import Error404 from './containers/Errors/Error404.jsx';
{/* Authentication */}
import SignIn from './containers/auth/SignIn.jsx';
import SignUp from './containers/auth/SignUp.jsx';
import Activate from './containers/auth/Activate.jsx';
import Reset_password from './containers/auth/Reset_password.jsx';
import Reset_password_new from './containers/auth/Reset_password_new.jsx';

import Conditions from './containers/Home/Conditions.jsx';

import Dashboard from './containers/Profile/Dashboard.jsx';

import Mall from './containers/Home/Mall.jsx';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error404/>}/>

        <Route exact path='/' element={<Home />} />

        {/* Authentication */}
        <Route exact path='/login' element={<SignIn/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path="/activate/:uid/:token" element={<Activate/>} />

        

        <Route exact path='/reset_password' element={<Reset_password/>}/>
        <Route path='/password/reset/confirm/:uid/:token' element={<Reset_password_new/>} />

        <Route exact path='/conditions' element={<Conditions/>}/>

        <Route exact path='/dashboard' element={<Dashboard/>}/>

        <Route exact path='/mall' element={<Mall/>}/>



      </Routes>

    </Router>
    </Provider>

  )
}

export default App;