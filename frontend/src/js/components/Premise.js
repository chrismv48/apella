import React from 'react'
import { Panel } from 'react-bootstrap'


const Premise = ({ premiseNode, depth=0, width="100%", left="0%", deletePremise }) => {
  depth++;
  const nestedPremises = (premiseNode.children).map((premiseNode, idx, siblings) => {
    const width = parseInt(1 / siblings.length * 100).toString() + '%';
    const left = parseInt(idx / siblings.length * 100).toString() + '%';
    return <Premise key={premiseNode.id}
                    premiseNode={premiseNode}
                    depth={depth}
                    width={width}
                    left={left}
                    deletePremise={deletePremise}
    />
  });
  return (
    <div id={premiseNode.premise_id}
         style={{position: "absolute",
         top:200,
         width: width,
         left:left,
         textAlign: "center"
         }}
         key={premiseNode.premise_id}
    >
      <div style={{
      width: 200,
      margin: "auto"
      }}>
        <Panel header={premiseNode.premise.title} bsStyle="primary">
          <div>
            ({premiseNode.premise_id} - {premiseNode.parent_premise_id})
            {premiseNode.premise.description}
          </div>
          <div style={{float:"right"}} onClick={() => deletePremise(premiseNode.premise_id, premiseNode.conclusion_id)}>
            Delete
          </div>
        </Panel>

      </div>
      {nestedPremises}
    </div>
  )
};

export default Premise;
