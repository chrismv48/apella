import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { addArgument } from '../actions/argument';

class CreateArgument extends Component {

  constructor() {
    super();

    this.state = {
      argumentName: "",
      argumentDescription: ""
    };
    this.handleArgumentSubmit = this.handleArgumentSubmit.bind(this);
    this.handleArgumentNameChange= this.handleArgumentNameChange.bind(this);
    this.handleArgumentDescriptionChange= this.handleArgumentDescriptionChange.bind(this);
  }


  handleArgumentNameChange(e) {
    this.setState({
      argumentName: e.target.value
    })
  }

  handleArgumentDescriptionChange(e) {
    this.setState({
      argumentDescription: e.target.value
    })
  }

  handleArgumentSubmit() {
    console.log('handle submit');
    const {argumentName, argumentDescription} = this.state;
    this.props.addArgument({
      argumentName,
      argumentDescription
    })
  }

  render() {
    return (
      <div>
        <form style={{width: "50%"}}>
          <FormGroup controlId="argumentName">
            <ControlLabel>Argument Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.argumentName}
              onChange={this.handleArgumentNameChange}
            />
          </FormGroup>
          <FormGroup controlId="argumentDescription">
            <ControlLabel>Argument Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.argumentDescription}
              onChange={this.handleArgumentDescriptionChange}
            />
          </FormGroup>
        </form>
        <Button bsStyle="primary" onClick={this.handleArgumentSubmit}>Submit</Button>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addArgument
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateArgument);
