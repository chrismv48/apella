import React, { Component } from 'react'
import Issue from './../components/Issue'
import { connect } from 'react-redux'
import setSortOption from '../actions/index'
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


function mapStateToProps(state) {
  return {
    issues: state.issues,
    sortOption: state.sortOption
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
