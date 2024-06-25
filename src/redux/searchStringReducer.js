
// actions
export const updateSearchStr = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

// action creators
const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
}

export default searchStringReducer;