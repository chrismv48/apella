import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIssue } from '../actions/index'

class IssueView extends Component {

  componentWillMount() {
    console.log(this.props);
    this.props.fetchIssue(this.props.params["issueId"])
  }

  render() {
    return (
      <div>
        {this.props.issue ?
          <div>
            <h1>{this.props.issue.title}</h1>
            <p>{this.props.issue.description}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

function mapStateToProps({ issue }) {
  return {issue}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchIssue: (issueId) => dispatch(fetchIssue(issueId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueView)
