import makeApiRequest from './index'

export const ADDED_PREMISE = 'ADDED_PREMISE';
export const DELETED_PREMISE = 'DELETED_PREMISE';
export const ADDING_PREMISE = 'ADDING_PREMISE';
export const DELETING_PREMISE = 'DELETING_PREMISE';


export const addingPremise = () => {
  return {
    type: ADDING_PREMISE
  }
};

export const addedPremise = () => {
  console.log('premise added');
  return {
    type: ADDED_PREMISE
  }
};

export const deletingPremise = () => {
  return {
    type: DELETING_PREMISE
  }
};

export const deletedPremise = () => {
  return {
    type: DELETED_PREMISE
  }
};

export const addPremise = (premiseData) => {
  const data = {
    argument_id: premiseData.argumentId,
    parent_premise_id: premiseData.parentPremiseId,
    title: premiseData.argumentName,
    description: premiseData.premiseDescription
  };
  console.log('adding premise');
  return (dispatch) => {
    dispatch(addingPremise());
    const url = `http://127.0.0.1:5000/premise`;
    return makeApiRequest(url, 'post', data)
      .then(dispatch(addedPremise()))
  }
};

export const deletePremise = (premiseId) => {

  return (dispatch) => {
    dispatch(deletingPremise());
    const url = `http://127.0.0.1:5000/premise/${premiseId}`;
    return makeApiRequest(url, 'delete')
      .then(dispatch(deletedPremise()))
  }
};
