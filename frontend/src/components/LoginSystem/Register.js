import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Register extends Component{

  state = {
    username: "",
    fullName: "",
    email: "",
    password: "",
    date: "",
    error: ""
  }

  onInputChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  createAccount = async (e) => {
    e.preventDefault();
    let error;

    const user = {...this.state};
    delete user.error;

    const res = await axios.post("http://localhost:4000/api/register",user);

    try{
      error = res.data.errmsg.split(" ")[7];
    }catch{
      error = res.data.message;
    }

    if(error === "email_1"){
      error = "Ya existe un usuario con ese Email"
    }else if(error === "username_1"){
      error = "Ya existe un usuario con ese Nombre de Usuario"
    }else{
      error = "Usuario Creado"
    }

    this.setState({
      error
    });
  }

  handleChange = (date) => {
    this.setState({date});
  }

  render(){
    return (
      <div className="card card-body">
        <h3 className="card-title">Registro</h3>
        <form onSubmit={this.createAccount}>
          <div className="form-group">
            <input type="text" className="form-control" name="username" placeholder="Nombre de Usuario" onChange={this.onInputChange} value={this.state.username}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="fullName" placeholder="Nombre Completo" onChange={this.onInputChange} value={this.state.fullName}/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.onInputChange} value={this.state.email}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={this.onInputChange} value={this.state.password} />
          </div>
          <div className="form-group row pl-3 pr-3">
            <DatePicker selected={this.state.date} onChange={this.handleChange} className="form-control btn-block col-md" placeholderText="Fecha de Nacimiento" />
            <button className="btn btn-success mt-sm-3 mt-md-3 ml-lg-3 mt-lg-0 col-md ">Registarse</button>
          </div>
        </form>
        {
          this.state.error.length > 0 ? this.state.error === "Usuario Creado" ? (
            <div className="alert alert-success">
              {this.state.error}
            </div>
          ): (
            <div className="alert alert-danger">
              {this.state.error}
            </div>
          ) : ""
        }
      </div>
    )
  }

}

export default Register;