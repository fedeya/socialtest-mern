import React, { Component } from 'react'
import ViewPublication from "./ViewPublication";
import { Link } from "react-router-dom"

class ListPublication extends Component {

  componentDidMount(){
    this.props.getPublications();
  }

  render() {

    const { publications } = this.props;

    return (
      <div>
        {
          publications.sort((a, b) => {
            a = new Date(a.createdAt);
            b = new Date(b.createdAt);

            return a > b ? -1 : a < b ? 1 : 0;

          }).map(publication => (
            <Link to={`/publication/${publication._id}`} key={publication._id} className="text-reset text-decoration-none">
              <ViewPublication
                id={publication._id}
                title={publication.title}
                content={publication.content}
                author={publication.author}
                date={publication.createdAt}
                user={this.props.author}
                getPublications={this.props.getPublications}
                history={this.props.history}
              />
            </Link>
          ))
        }
      </div>
    )
  }
}

export default ListPublication;