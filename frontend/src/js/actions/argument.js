import { makeApiRequest } from './index'
import { browserHistory } from 'react-router'

export const ADDING_ARGUMENT = 'ADDING_ARGUMENT';
export const ADDED_ARGUMENT = 'ADDED_ARGUMENT';
export const FETCHING_ARGUMENTS = 'FETCHING_ARGUMENTS';
export const RECEIVE_ARGUMENTS = 'RECEIVE_ARGUMENTS';
export const FETCHING_ARGUMENT = 'FETCHING_ARGUMENT';
export const RECEIVE_ARGUMENT = 'RECEIVE_ARGUMENT';


export const addArgument = (argumentData) => {
  const data = {
    title: argumentData.argumentName,
    description: argumentData.argumentDescription
  };
  console.log('adding argument');
  return (dispatch) => {
    dispatch(addingArgument());
    const url = `http://127.0.0.1:5000/argument`;
    return makeApiRequest(url, 'post', data)
      .then(dispatch(addedArgument()))
      .then((newArgumentData) => {
        browserHistory.push(`/argument/${newArgumentData.id}`)
      })
  }
};

export const addingArgument = () => {
  return {
    type: ADDING_ARGUMENT
  }
};

export const addedArgument = () => {
  console.log('argument added');
  return {
    type: ADDED_ARGUMENT
  }
};


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
    type: FETCHING_ARGUMENTS
  }
};

export const receiveArguments = (responseJson) => {
  console.log('receiving Arguments');
  return {
    type: RECEIVE_ARGUMENTS,
    arguments_: responseJson.argument
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
    type: FETCHING_ARGUMENT
  }
};

export const receiveArgument = (responseJson) => {
  console.log('receiving Arguments');
  return {
    type: RECEIVE_ARGUMENT,
    selectedArgument: responseJson
  }
};

