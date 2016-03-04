import React, { Component } from 'react'
import Issue from './../components/Issue'
import { connect } from 'react-redux'
import { setSortOption, fetchIssues } from '../actions/index'
import IssueSortButtons from '../components/IssueSortButtons'


const sortIssues = (issues, sortOption) => {
  if (sortOption === "SUPPORTERS") {
    return issues.sort(function (a, b) {
      return b["supporters"] - a["supporters"];
    });
  } else if (sortOption === "DATE") {
    return issues.sort(function (a, b) {
      return new Date(b["date_created"]) - new Date(a["date_created"]);
    });
  }
};


class IssueList extends Component {


  renderIssues(issues, sortOption) {
    console.log(issues);
    return sortIssues(issues, sortOption).map((issue) => {
      return (
        <Issue key={issue.id} { ...issue } />
      );
    });
  }


  render() {
    return (
      <div className="issueList">
        <IssueSortButtons sortOption={this.props.sortOption} onSetSortOption={this.props.onSetSortOption}/>
        {this.renderIssues(this.props.issues, this.props.sortOption)}
      </div>
    );
  };
}


function mapStateToProps({ issues, sortOption }) {
  return {
    issues,
    sortOption
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetSortOption: (sortOption) => {
      dispatch(setSortOption(sortOption))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
