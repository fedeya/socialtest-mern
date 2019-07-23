import React, { Component } from 'react'
import axios from "axios";

class CreateComment extends Component {

  state = {
    public_id: "",
    content: "",
    author: this.props.author
  }

  componentDidMount(){
    this.setState({
      public_id: this.props.public_id
    })
  }

  createComment = async e => {
    e.preventDefault();

    await axios.post("http://localhost:4000/api/comments",this.state)

    this.props.getComments();

    this.setState({content: ""})

  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="card-body card mt-0">
        <form onSubmit={this.createComment} >
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Escribe un Comentario" name="content" onChange={this.onInputChange} value={this.state.content} />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateComment;