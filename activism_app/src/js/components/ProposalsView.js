import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProposalsList from '../containers/ProposalList'
import { PageHeader } from 'react-bootstrap'
import { fetchProposals } from '../actions/index'


class ProposalsView extends Component {

  componentWillMount() {
    this.props.fetchProposals();
  }

  render() {
    return (
      <div className="proposals-view">
        <PageHeader>Proposals View</PageHeader>
        <ProposalsList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProposals
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProposalsView);
