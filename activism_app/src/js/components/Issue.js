import React from 'react'

const Issue = (issue) => (
  <div className="issue">
    {issue.supporters} - {issue.title}
  </div>
);

export default Issue;
