//TODO: consider making this a dumb component and inheriting stuff from ProposalsView

import React, { Component } from 'react'
import Proposal from './../components/Proposal'
import { connect } from 'react-redux'
import { setSortOption, fetchProposals } from '../actions/index'
import ProposalSortButtons from '../components/ProposalSortButtons'

// TODO: move this to API
const sortProposals = (proposals, sortOption) => {
  if (sortOption === "SUPPORTERS") {
    return proposals.sort(function (a, b) {
      return b["supporters"] - a["supporters"];
    });
  } else if (sortOption === "DATE") {
    return proposals.sort(function (a, b) {
      return new Date(b["date_created"]) - new Date(a["date_created"]);
    });
  }
};


class ProposalList extends Component {


  renderProposals(proposals) {
    return proposals.map((proposal) => {
      return (
        <Proposal key={proposal.id} { ...proposal } />
      );
    });
  }


  render() {
    return (
      <div className="proposalList">
        <ProposalSortButtons sortOption={this.props.sortOption} onSetSortOption={this.props.onSetSortOption}/>
        {this.renderProposals(this.props.proposals)}
      </div>
    );
  };
}


function mapStateToProps({ proposals, sortOption }) {
  return {
    proposals,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList);
