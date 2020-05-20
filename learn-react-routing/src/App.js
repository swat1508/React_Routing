import React,{useState} from 'react';
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register';
import NavBar from './components/NavBar';
import ShowUserList from './components/ShowUserList';
import User from './components/User';
function App() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const toggleLoginStatus = () =>{
    setToggleLogin(!toggleLogin)
  }
  return (
    <div className="App">
     
     <BrowserRouter>
     <h1>
       <NavBar logStatus={toggleLogin}/>
  <button type='submit' onClick={toggleLoginStatus}>{toggleLogin ? 'Logged-In' : 'Logged Out' }</button>
     </h1>
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/about" render={props => <About {...props}/> }/>
     <Route path="/register" component={Register}/>
     <Route path='/userlist' render={() =>( toggleLogin ? (<ShowUserList/>) : (<Redirect to='/' />) )} />
     <Route path="/user/:uname" render={({match}) =>( toggleLogin ? (<User userProp={match.params.uname} />) : (<Redirect to='/' />) )} />
     <Route component={ErrorPage}/>
     
     </Switch>
     </BrowserRouter>

    </div>
  );
}

export default App;
