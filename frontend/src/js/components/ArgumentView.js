import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArgument } from '../actions/argument'

class ArgumentView extends Component {

  componentWillMount() {
    console.log(this.props);
    this.props.fetchArgument(this.props.params["argumentId"])
  }

  render() {
    return (
      <div>
        {this.props.selectedArgument ?
          <div>
            <h1>{this.props.selectedArgument.title}</h1>
            <p>{this.props.selectedArgument.description}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

function mapStateToProps({ selectedArgument }) {
  return {selectedArgument}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArgument: (argumentId) => dispatch(fetchArgument(argumentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArgumentView)
