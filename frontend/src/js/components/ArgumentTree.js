import React, { Component } from 'react'
import Premise from './Premise'


function nestComments(commentList) {
  const commentMap = {};

  // move all the comments into a map of id => comment
  commentList.forEach(comment => commentMap[comment.premise_id] = comment);

  // iterate over the comments again and correctly nest the children
  commentList.forEach(comment => {
    comment.children = [];
    if (comment.parent_premise_id !== null) {
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

export default class ArgumentTree extends Component {

  constructor() {
    super();
    this.jsPlumbInstance = jsPlumb.getInstance();
  }

  componentDidMount() {
    this.jsPlumbInstance.setContainer("argument_tree");
  }

  componentDidUpdate() {
    this.props.premiseNodes.forEach((premiseNode) => {
      console.log('generating connection');
      //this.jsPlumbInstance.draggable(premiseNode.premise_id.toString());
      if (premiseNode.parent_premise_id) {
        return (
          this.jsPlumbInstance.connect({
            source: premiseNode.parent_premise_id.toString(),
            target: premiseNode.premise_id.toString(),
            anchor: ["Top", "Bottom"],
            connector: "Straight",
            endpoint: "Blank"
          })
        )
      }
    });
  }

  render() {
    return (
      <div id="argument_tree" style={{position:"relative", top: -180}}>
        {nestComments(this.props.premiseNodes).map((premiseNode) => {
            return (
              <Premise premiseNode={premiseNode} key={premiseNode.premise_id} deletePremise={this.props.deletePremise}/>
            )
          }
        )
        }
      </div>
    )
  }
}

