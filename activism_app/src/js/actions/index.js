import axios from 'axios'

export const SET_SORT_OPTION = 'SET_SORT_OPTION';
export const FETCH_ISSUES = 'FETCH_ISSUES';

export const setSortOption = (sortOption) => (
{
  type: SET_SORT_OPTION,
  sortOption
}
);


export function fetchIssues() {
  const url = 'http://127.0.0.1:5000/proposal';
  const request = axios.get(url);
  return {
    type: FETCH_ISSUES,
    payload: request
  };
}
