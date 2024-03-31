import axios from "axios";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import BooksTable from "./Components/booksTable";
import BookDetails from "./Components/BookDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Redux/action";

function App() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableData);
  console.log(tableData);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const fetchDataHandler = async () => {
    try {
      const response = await axios.get(
        "https://anapioficeandfire.com/api/books"
      );
      dispatch(fetchData(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const storeBookData = (data) => {
  //   localStorage.setItem("bookData", JSON.stringify(data));
  //   navigate("/book-details");
  // };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // <BooksTable data={tableData} storeBookData={storeBookData} />
            <BooksTable />
          }
        />
        <Route path="/book-details" element={<BookDetails />} />
      </Routes>
    </>
  );
}
export default App;
