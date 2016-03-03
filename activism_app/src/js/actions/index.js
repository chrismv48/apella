const SET_SORT_OPTION = 'SET_SORT_OPTION';

const setSortOption = (sortOption) => {
  return {
    type: SET_SORT_OPTION,
    sortOption
  }
};

export default setSortOption;
