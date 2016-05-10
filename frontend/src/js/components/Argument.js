import React from 'react'
import { Link } from 'react-router'

const Argument = (argument_) => (
  <div className="media" id="argument_">
    <div className="media-left">
      <span>{argument_.supporters}</span>
    </div>
    <div className="media-body">
      <Link to={`/argument_/${argument_.id}`}>
        <h4 className="media-heading">{argument_.title}</h4>
      </Link>
      {argument_.description}
      <small>
        <ul className="list-inline">
          <li>Date posted: {argument_.date_created}</li>
          <li>Posted by: {argument_.username}</li>
          <li>Tags: {argument_.tags}</li>
        </ul>
      </small>
    </div>
  </div>
);

export default Argument;
