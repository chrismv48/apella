import React, { Component } from 'react'
import { connect } from 'react-redux'
import IssuesList from '../containers/IssueList'
import { PageHeader } from 'react-bootstrap'
import { fetchIssues } from '../actions/index'


class IssuesView extends Component {

  componentWillMount() {
    this.props.fetchIssues();
  }

  render() {
    return (
      <div className="issues-view">
        <PageHeader>Issues View</PageHeader>
        <IssuesList />
      </div>
    );
  }
}

export default connect(null, { fetchIssues })(IssuesView);
