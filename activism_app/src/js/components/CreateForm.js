import React, { Component } from 'react'
import _ from 'lodash'
import Premise from './Premise'


function nestComments(commentList) {
  const commentMap = {};

  // move all the comments into a map of id => comment
  commentList.forEach(comment => commentMap[comment.premise_id] = comment);

  // iterate over the comments again and correctly nest the children
  commentList.forEach(comment => {
    comment.children = [];
    if(comment.parent_premise_id !== null) {
      const parent = commentMap[comment.parent_premise_id];
      parent.children = (parent.children || []);
      parent.children.push(comment);
    }
  });

  // filter the list to return a list of correctly nested comments
  return commentList.filter(comment => {
    return comment.parent_premise_id === null;
  });
}

export default class CreateForm extends Component {

  constructor() {
    super();

    this.state = {
      premiseName: null,
      parentPremiseId: null,
      premiseDescription: null
    };
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
    const {premiseName, parentPremiseId, premiseDescription} = this.state;
    this.props.addPremise({
      premiseName,
      parentPremiseId,
      premiseDescription,
      conclusionId: 1
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
        <button onClick={() => this.handleSubmit()}>Add Premise</button>
        <div>
          <div>
            {nestComments(this.props.premiseNodes).map((premise) => {
              premise.depth = 0;
              return (
                <Premise key={premise.premise_id} premise={premise} depth={0}/>
              );
            })
            }
          </div>
        </div>
      </div>

    )
  }

}
