import shortid from "shortid";

// selectors
export const getColumnsByList = ({ columns }, renderingListId) => {
    const filteredColumns = columns.filter(column => column.listId.toString() === renderingListId.toString());
    return(filteredColumns);
}

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');


// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });


const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
}

export default columnsReducer;