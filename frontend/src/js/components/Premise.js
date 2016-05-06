import React from 'react'

const Premise = ({ premise, depth=0, width="100%", left="0%" }) => {
  depth++;
  const nestedPremises = (premise.children).map((premise, idx, siblings) => {
    const width = parseInt(1/siblings.length*100).toString() + '%';
    const left = parseInt(idx/siblings.length*100).toString() + '%';
    return <Premise key={premise.id} premise={premise} depth={depth} width={width} left={left}/>
  });
  return (
    <div id={premise.premise_id}
         style={{position: "absolute",
         margin: 30,
         top:100,
         width: width,
         left:left,
         textAlign: "center"
         }}
         key={premise.premise_id}
    ><span style={{border:"1px solid black", padding: 3}}>
      {premise.premise_id} - {premise.parent_premise_id}
    </span>
      {nestedPremises}
    </div>
  )
};

export default Premise;
