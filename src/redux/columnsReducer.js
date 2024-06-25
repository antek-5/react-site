import shortid from "shortid";

// selectors
export const getColumnsByList = ({ columns }, renderingListId) => {
    const filteredColumns = columns.filter(column => parseInt(column.listId) === parseInt(renderingListId));
    return(filteredColumns);
}

// actions
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

// action creators

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
}

export default columnsReducer;