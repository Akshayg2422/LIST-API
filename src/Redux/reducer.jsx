import { DATA, DATA_SUCCESS, DATA_FAILURE, BOOK_DETAILS } from "./actionType";

const initialState = {
  tableData: [],
  selectedBook: undefined,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        tableData: action.payload,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };
    case DATA_FAILURE:
      return {
        ...state,
        tableData: action.payload,
      };

    case BOOK_DETAILS:
      return {
        ...state,
        selectedBook: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
