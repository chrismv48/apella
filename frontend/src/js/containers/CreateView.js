//TODO: consider making this a dumb component and inheriting stuff from ProposalsView

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CreateForm from '../components/CreateForm'
import * as actions from '../actions/index';

class CreateView extends Component {


  render() {
    return (
      <div>Add a Premise
        <CreateForm { ...this.props } />
      </div>
    );
  };
}

function mapStateToProps({fetchingPremiseNodes,  premiseNodes, addingPremise}) {
  return {
    fetchingPremiseNodes,
    premiseNodes,
    addingPremise
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPremise: actions.addPremise,
    fetchPremises: actions.fetchPremiseNodes
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateView);
