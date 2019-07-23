import React, { Component } from 'react'
import {format} from "timeago.js";
import axios from "axios";

class Comment extends Component {

  deleteComment = async () => {
    await axios.delete("http://localhost:4000/api/comments/"+this.props.id);

    this.props.getComments();
  }

  render() {

    const { author, content, date } = this.props;

    return (
      <div className="card bg-light mb-2">
        <div className="card-body p-2">
          <div className="d-flex justify-content-between">
            <span className="font-weight-bold">{author}</span>
            { author === this.props.user ? (
              <section>
                <button type="button" onClick={this.deleteComment} className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>  
                </button>
                <button type="button" className="close" aria-label="Edit">
                  <span aria-hidden="true">&#9998;</span>  
                </button>
              </section>
            ): ""}
          </div>
          <div className="d-flex justify-content-between">
            <span>{content}</span>
            <span>{format(date)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;