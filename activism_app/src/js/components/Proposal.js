import React from 'react'
import { Link } from 'react-router'

const Proposal = (proposal) => (
  <div className="media" id="proposal">
    <div className="media-left">
      <span>{proposal.supporters}</span>
    </div>
    <div className="media-body">
      <Link to={`/proposal/${proposal.id}`}>
        <h4 className="media-heading">{proposal.title}</h4>
      </Link>
      {proposal.description}
      <small>
        <ul className="list-inline">
          <li>Date posted: {proposal.date_created}</li>
          <li>Posted by: {proposal.username}</li>
          <li>Tags: {proposal.tags}</li>
        </ul>
      </small>
    </div>
  </div>
);

export default Proposal;
