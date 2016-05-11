import makeApiRequest from './index'

export const FETCHING_PREMISE_NODES = 'FETCHING_PREMISE_NODES';
export const RECEIVE_PREMISE_NODES = 'RECEIVE_PREMISE_NODES';


export const fetchingPremiseNodes = () => {
  return {
    type: FETCHING_PREMISE_NODES
  }
};

export const receivePremiseNodes = (premiseNodes) => {
  console.log(premiseNodes);
  return {
    type: RECEIVE_PREMISE_NODES,
    premiseNodes
  }
};

export const fetchPremiseNodes = (argumentId) => {
  return (dispatch) => {
    dispatch(fetchingPremiseNodes());
    const url = `http://127.0.0.1:5000/premise_node/${argumentId}`;
    return makeApiRequest(url)
      .then((premiseNodes) => dispatch(receivePremiseNodes(premiseNodes)))
  }
};

export const addPremiseNode = (argumentId, premiseId, parentPremiseId) => {
  const premiseNodeData = {
    premise_id: premiseId,
    parent_premise_id: parentPremiseId
  };
  return (dispatch) => {
    dispatch(fetchingPremiseNodes()); // maybe this needs to be addingPremiseNodes?
    const url = `http://127.0.0.1:5000/premise_node/${argumentId}`;
    return makeApiRequest(url, 'post', premiseNodeData)
  }
};
