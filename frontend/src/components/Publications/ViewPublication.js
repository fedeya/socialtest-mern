import React, { Component } from 'react'
import axios from "axios";
import { format } from "timeago.js";

class ViewPublication extends Component {

  deletePublication = async () => {
    await axios.delete("http://localhost:4000/api/publications/"+this.props.id);
    this.props.getPublications();
    this.props.history("/");
  }

  render() {

    const { title, content, author, date } = this.props;

    return (
      <div className="card mb-4">
        <div className="card-header bg-white d-flex justify-content-between">
          <h3 className="card-title">{title}</h3>
          {/* {author === this.props.user ? (
            <section>
              <button type="button" onClick={this.deletePublication} className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>  
              </button>
              <button type="button" className="close" aria-label="Edit">
                <span aria-hidden="true">&#9998;</span>  
              </button>
            </section>
          ) : ""} */}

        </div>
        <div className="card-body">
          <p>{content}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <span>{author}</span>
          <span>{format(date)}</span>
        </div>
      </div>
    )
  }
}

export default ViewPublication;