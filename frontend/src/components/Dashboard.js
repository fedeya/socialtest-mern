import React, { Component } from 'react';
import axios from "axios";

import CreatePublication from "./Publications/CreatePublication";
import ListPublication from "./Publications/ListPublication";

class Dashboard extends Component{

  state = {
    publications: []
  }

  getPublications = async () => {
    const res = await axios.get("http://localhost:4000/api/publications")
    this.setState({
      publications: res.data
    });
  }

  render(){
    return (
      <div>
        <CreatePublication 
          getPublications={this.getPublications} 
          author={this.props.acc.username}
        />
        <ListPublication 
          getPublications={this.getPublications} 
          publications={this.state.publications} 
          author={this.props.acc.username}
          history={this.props.history.push}
        />
      </div>
    )
  }

}

export default Dashboard;