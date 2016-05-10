import * as actions from './action_constants'


export const setSortOption = (sortOption) => {
  return {
    type: actions.SET_SORT_OPTION,
    sortOption
  }
};

// thunk async action
export const fetchArguments = () => {
  console.log('fetchArguments');
  return (dispatch) => {
    const url = 'http://127.0.0.1:5000/argument';
    dispatch(fetchingArguments());
    return makeApiRequest(url)
      .then((responseJson) => dispatch(receiveArguments(responseJson)))
  }
};

export const fetchingArguments = () => {
  console.log('fetching Arguments');
  return {
    type: actions.FETCHING_PROPOSALS
  }
};

export const receiveArguments = (responseJson) => {
  console.log('receiving Arguments');
  return {
    type: actions.RECEIVE_PROPOSALS,
    arguments_: responseJson['argument']
  }
};

export const fetchArgument = (argumentId) => {
  console.log('fetchArguments');
  return (dispatch) => {
    const url = `http://127.0.0.1:5000/argument/${argumentId}`;
    dispatch(fetchingArgument());
    return makeApiRequest(url)
      .then((responseJson) => dispatch(receiveArgument(responseJson)))
  }
};

export const fetchingArgument = () => {
  console.log('fetching Arguments');
  return {
    type: actions.FETCHING_PROPOSAL
  }
};

export const receiveArgument = (responseJson) => {
  console.log('receiving Arguments');
  return {
    type: actions.RECEIVE_PROPOSAL,
    selectedArgument: responseJson
  }
};

export const makeApiRequest = (url, method = 'get', data = null) => {
  console.log(`requesting: ${method}: ${url}`);
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

export const deletingPremise = () => {
  return {
    type: actions.DELETING_PREMISE
  }
};

export const deletedPremise = () => {
  return {
    type: actions.DELETED_PREMISE
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

export const deletePremise = (premiseId, conclusionId) => {

  return (dispatch) => {
    dispatch(deletingPremise());
    const url = `http://127.0.0.1:5000/premise/${premiseId}`;
    return makeApiRequest(url, 'delete')
      .then(dispatch(deletedPremise()))
      .then(dispatch(fetchPremiseNodes(conclusionId)))
  }
};
