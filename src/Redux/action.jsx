import { DATA, DATA_SUCCESS, DATA_FAILURE, BOOK_DETAILS } from "./actionType";

export const fetchData = (tableData) => ({ type: DATA, payload: tableData });
export const fetchDataSuccess = (response) => ({
  type: DATA_SUCCESS,
  payload: response,
});
export const fetchDataFailure = (error) => ({
  type: DATA_FAILURE,
  payload: error,
});

export const storeBookDetails = (bookDetails) => ({
  type: BOOK_DETAILS,
  payload: bookDetails,
});
