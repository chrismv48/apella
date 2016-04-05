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

export const makeApiRequest = (url, method = 'get') => {
  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return response.json();
    })
};
