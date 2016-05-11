import * as premiseActions from './premise'
import * as premiseNodeActions from './premiseNode'

const SET_SORT_OPTION = 'SET_SORT_OPTION';

export const setSortOption = (sortOption) => {
  return {
    type: SET_SORT_OPTION,
    sortOption
  }
};


export const makeApiRequest = (url, method = 'get', data = null) => {
  console.log(`requesting: ${method}: ${url}`);
  //noinspection JSUnresolvedFunction
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

export const addPremiseToArgument = (argumentId, premiseId, premiseData) => {

  return (dispatch) => {
    // if no premiseId, we'll need to create a new premise object
    if (!premiseId) {
      const premisePostData = {
        title: premiseData.title,
        description: premiseData.description
      };
      dispatch(premiseActions.addingPremise());
      const url = `http://127.0.0.1:5000/premise`;
      makeApiRequest(url, 'post', premisePostData)
        .then(dispatch(premiseActions.addedPremise()))
        .then((newPremise) => {
          premiseId = newPremise.id
        })
    }
    return dispatch(premiseNodeActions.addPremiseNode(argumentId, premiseId, premiseData.parentPremiseId))
    .then(premiseNodeActions.fetchPremiseNodes(argumentId))
  }
};



