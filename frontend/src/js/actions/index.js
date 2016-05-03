import * as actions from './action_constants'


export const setSortOption = (sortOption) => {
  return {
    type: actions.SET_SORT_OPTION,
    sortOption
  }
};

// thunk async action
export const fetchProposals = () => {
  console.log('fetchProposals');
  return (dispatch) => {
    const url = 'http://127.0.0.1:5000/proposal';
    dispatch(fetchingProposals());
    return makeApiRequest(url)
      .then((responseJson) => dispatch(receiveProposals(responseJson)))
  }
};

export const fetchingProposals = () => {
  console.log('fetching Proposals');
  return {
    type: actions.FETCHING_PROPOSALS
  }
};

export const receiveProposals = (responseJson) => {
  console.log('receiving Proposals');
  return {
    type: actions.RECEIVE_PROPOSALS,
    proposals: responseJson
  }
};

export const fetchProposal = (proposalId) => {
  console.log('fetchProposals');
  return (dispatch) => {
    const url = `http://127.0.0.1:5000/proposal/${proposalId}`;
    dispatch(fetchingProposal());
    return makeApiRequest(url)
      .then((responseJson) => dispatch(receiveProposal(responseJson)))
  }
};

export const fetchingProposal = () => {
  console.log('fetching Proposals');
  return {
    type: actions.FETCHING_PROPOSAL
  }
};

export const receiveProposal = (responseJson) => {
  console.log('receiving Proposals');
  return {
    type: actions.RECEIVE_PROPOSAL,
    selectedProposal: responseJson
  }
};

export const makeApiRequest = (url, method = 'get', data = null) => {
  console.log(`requesting: ${url}`);
  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : null
  })
    .then((response) => {
      return response.json();
    })
};

export const fetchingPremiseNodes = () => {
  return {
    type: actions.FETCHING_PREMISE_NODES
  }
};

export const receivePremiseNodes = (premiseNodes) => {
  console.log(premiseNodes);
  return {
    type: actions.RECEIVE_PREMISE_NODES,
    premiseNodes
  }
};

export const fetchPremiseNodes = (conclusion_id) => {
  return (dispatch) => {
    dispatch(fetchingPremiseNodes());
    const url = `http://127.0.0.1:5000/premise_node/${conclusion_id}`;
    return makeApiRequest(url)
      .then((premiseNodes) => dispatch(receivePremiseNodes(premiseNodes)))
  }
};

export const addingPremise = () => {
  return {
    type: actions.ADDING_PREMISE
  }
};

export const addedPremise = () => {
  console.log('premise added');
  return {
    type: actions.ADDED_PREMISE
  }
};

export const addPremise = (premiseData) => {
  const data = {
    conclusion_id: premiseData.conclusionId,
    parent_premise_id: premiseData.parentPremiseId,
    title: premiseData.premiseName,
    description: premiseData.premiseDescription
  };
  console.log('adding premise');
  return (dispatch) => {
    dispatch(addingPremise());
    const url = `http://127.0.0.1:5000/premise`;
    return makeApiRequest(url, 'post', data)
      .then(dispatch(addedPremise()))
      .then(dispatch(fetchPremiseNodes(premiseData.conclusionId)))
  }
};
