import * as actions from '../actions/action_constants'

const initialState = {
  proposals: [],
  selectedProposal: {},
  fetchingProposals: false,
  fetchingProposal: false
};

const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.FETCHING_PROPOSALS:
      return {
        ...state,
        fetchingProposals: true
      };
    case actions.RECEIVE_PROPOSALS:
      return {
        ...state,
        proposals: action.proposals,
        fetchingProposals: false
      };
    case actions.FETCHING_PROPOSAL:
      return {
        ...state,
        fetchingProposal: true
      };
    case actions.RECEIVE_PROPOSAL:
      return {
        ...state,
        selectedProposal: action.selectedProposal,
        fetchingProposal: false
      };
    default:
      return state
  }
};
export default appReducer;
