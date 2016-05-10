import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArgumentList from '../containers/ArgumentList'
import { PageHeader } from 'react-bootstrap'
import { fetchArguments } from '../actions/index'


class ArgumentsView extends Component {

  componentWillMount() {
    this.props.fetchArguments();
  }

  render() {
    return (
      <div className="arguments-view">
        <PageHeader>Arguments View</PageHeader>
        <ArgumentList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchArguments
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArgumentsView);
