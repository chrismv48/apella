import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProposal } from '../actions/index'

class ProposalView extends Component {

  componentWillMount() {
    console.log(this.props);
    this.props.fetchProposal(this.props.params["proposalId"])
  }

  render() {
    return (
      <div>
        {this.props.selectedProposal ?
          <div>
            <h1>{this.props.selectedProposal.title}</h1>
            <p>{this.props.selectedProposal.description}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

function mapStateToProps({ selectedProposal }) {
  return {selectedProposal}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProposal: (proposalId) => dispatch(fetchProposal(proposalId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProposalView)
