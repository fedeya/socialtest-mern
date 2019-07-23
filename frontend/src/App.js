import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Home from "./components/Home";
import Publication from "./components/Publications/Publication";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/LoginSystem/Login";
import Register from "./components/LoginSystem/Register";
import Error404 from "./components/Errors/Error404";
import Profile from "./components/User/Profile";



class App extends Component{

  state = {
    isAuth: false
  }

  auth = (account) => {
    this.setState({account, isAuth: true})
    localStorage.setItem("acc", this.state.account._id);
  }

  desAuth = () => {
    this.setState({account: {}, isAuth: false});
    localStorage.removeItem("acc");
  }

  componentWillMount = async () => {
    const acc = localStorage.getItem("acc");
    if(acc){
      const res = await axios.get("http://localhost:4000/api/users/"+acc);
      this.setState({account: res.data, isAuth: true});
    }
  }

  render(){
    return (
      <Router>

        <Navigation isAuth={this.state.isAuth} desAuth={this.desAuth} />

        {
          this.state.isAuth ? (
            <div className="container p-4">
              <Switch>
                <Route path="/" exact render={(props) => <Home {...props} isAuth={this.state.isAuth} auth={this.auth} acc={this.state.account} />}/>
                <Route path="/publication/:id" render={(props) => <Publication {...props} acc={this.state.account} />} />
                <Route path="/profile" render={(props) => <Profile {...props} acc={this.state.account} />} />
                <Route component={Error404} />
              </Switch>

          </div>
          ) : (
            <div className="container p-4">
              <Switch>
                <Route path="/login" render={(props) => <Login {...props} auth={this.auth} />}/>
                <Route path="/register" component={Register} />
                <Route render={(props) => <Home {...props} isAuth={this.state.isAuth} auth={this.auth} acc={this.state.account} /> }/>
              </Switch>
            </div>
          )
        }



      </Router>
    )
  }
}

export default App;
