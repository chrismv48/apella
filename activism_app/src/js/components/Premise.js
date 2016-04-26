import React from 'react'

const Premise = ({ premise, depth }) => {
  depth++;
  const nestedPremises = (premise.children).map((premise) => {
    return <Premise key={premise.id} premise={premise} depth={depth}/>
  });
  return (
    <ul>
      <li>
        {premise.id}
        {nestedPremises}
      </li>
    </ul>
  )
};

export default Premise;
