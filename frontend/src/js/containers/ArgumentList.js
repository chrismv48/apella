//TODO: consider making this a dumb component and inheriting stuff from ArgumentsView

import React, { Component } from 'react'
import Argument from './../components/Argument'
import { connect } from 'react-redux'
import { setSortOption, fetchArguments } from '../actions/index'
import ArgumentSortButtons from '../components/ArgumentSortButtons'

console.log('rendered');
class ArgumentList extends Component {

  renderArguments(arguments_) {
    return arguments_.map((argument_) => {
      return (
        <Argument key={argument_.id} { ...argument_ } />
      );
    });
  }


  render() {
    return (
      <div className="argumentList">
        <ArgumentSortButtons sortOption={this.props.sortOption} onSetSortOption={this.props.onSetSortOption}/>
        {this.renderArguments(this.props.arguments_)}
      </div>
    );
  };
}


function mapStateToProps({ arguments_, sortOption }) {
  return {
    arguments_,
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

export default connect(mapStateToProps, mapDispatchToProps)(ArgumentList);
