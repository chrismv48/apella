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
    console.log('component mounted');
    this.jsPlumbInstance.setContainer("argument_tree");
  }

  componentDidUpdate() {
    this.props.premises.map((premise) => {
      console.log('generating connection');
      this.jsPlumbInstance.draggable(premise.premise_id.toString());
      return (
        this.jsPlumbInstance.connect({
          source: premise.premise_id.toString(),
          target: premise.parent_premise_id ? premise.parent_premise_id.toString() : null,
          anchor: ["Top", "Bottom"],
          connector: "Straight",
          endpoint: "Blank"
        })
      );
    });
  }

  render() {
    return (
      <div id="argument_tree" style={{position:"relative", width:"100%"}}>
        {nestComments(this.props.premises).map((premise) => {
            return (
              <Premise premise={premise} key={premise.premise_id} />
            )
          }
        )
        }
      </div>
    )
  }
}

