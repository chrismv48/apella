import React from 'react'

const Issue = (issue) => (
  <div className="media" id="issue">
    <div className="media-left">
      <span>{issue.supporters}</span>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{issue.title}</h4>
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
