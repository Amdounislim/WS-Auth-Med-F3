import React,{useEffect} from "react"
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Switch, Route} from "react-router-dom"
import UserRegister from './components/UserRegister/UserRegister';
import UserLogin from './components/UserLogin/UserLogin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile'
import {useSelector, useDispatch} from "react-redux"
import {getProfile} from "./JS/actions/userAction"
import Admin from "./components/Admin/Admin";

function App() {

  const isAuth = useSelector(state => state.userReducer.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])


  return (
    <div className="App">
      <NavBar />

      <div className="auth-wrapper">
        <Switch>
          <Route path="/register" render={() => <UserRegister />} />
          <Route path="/login" render={() => <UserLogin />} />
          <PrivateRoute path="/profile" render={() => <UserProfile />} />
          <PrivateRoute path="/admin" render={() => <Admin />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
