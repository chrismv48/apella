import React from 'react'
import { Link } from 'react-router'


const Issue = (issue) => (
  <div className="media" id="issue">
    <div className="media-left">
      <span>{issue.supporters}</span>
    </div>
    <div className="media-body">
      <Link to={`/issue/${issue.id}`}>
        <h4 className="media-heading">{issue.title}</h4>
      </Link>
      {issue.description}
      <small>
        <ul className="list-inline">
          <li>Date posted: {issue.date_created}</li>
          <li>Posted by: {issue.username}</li>
          <li>Tags: {issue.tags}</li>
        </ul>
      </small>
    </div>
  </div>
);

export default Issue;
