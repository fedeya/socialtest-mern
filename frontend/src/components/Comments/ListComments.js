import React, { Component } from 'react'
import Comment from "./Comment";

class ListComments extends Component {

  render() {

    const { comments } = this.props;

    return (
      <div className="card mt-3">
        <div className="card-body">
          <h4>Comentarios</h4>

          {
            comments.map(comment => (
              <Comment
                key={comment._id}
                id={comment._id}
                content={comment.content}
                author={comment.author}
                date={comment.createdAt}
                getComments={this.props.getComments}
                user={this.props.author}
              />   
            ))
          }

        </div>
      </div>
    )
  }
}

export default ListComments;