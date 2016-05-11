import React, { Component } from 'react'
import _ from 'lodash'
import Premise from './Premise'
import ArgumentTree from './ArgumentTree'


export default class CreateForm extends Component {

  constructor() {
    super();

    this.state = {
      premiseName: null,
      parentPremiseId: null,
      premiseDescription: null
    };
  }

  componentWillMount() {
    this.props.fetchPremises(1);
  }

  handlePremiseNameChange(premiseName) {
    this.setState({
      premiseName
    })
  }

  handlePremiseDescriptionChange(premiseDescription) {
    this.setState({
      premiseDescription
    })
  }

  handleParentPremiseIdChange(parentPremiseId) {
    this.setState({
      parentPremiseId
    })
  }

  handleSubmit() {
    console.log('handle submit');
    const {premiseName, parentPremiseId, premiseDescription} = this.state;
    this.props.addPremise({
      premiseName,
      parentPremiseId,
      premiseDescription,
      argumentId: 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="premise-name">Premise Name</label>
          <input type="text"
                 name="premise-name"
                 onChange={(e) => this.handlePremiseNameChange(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="parent-premise-id">Parent Premise</label>
          <input type="text"
                 name="parent-premise-id"
                 onChange={(e) => this.handleParentPremiseIdChange(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="premise-description">Premise Description</label>
          <textarea
            name="premise-description"
            onChange={(e) => this.handlePremiseDescriptionChange(e.target.value)}/>
        </div>
        <div>
          <button onClick={() => this.handleSubmit()}>Add Premise</button>
        </div>
        <div>
          <ArgumentTree premiseNodes={this.props.premiseNodes} deletePremise={this.props.deletePremise}/>
        </div>
      </div>

    )
  }

}
