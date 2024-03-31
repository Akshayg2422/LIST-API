import { useSelector } from "react-redux";

function BookDetails() {
  //   const bookData = JSON.parse(localStorage.getItem("bookData"));

  const selectedBook = useSelector((state) => state.selectedBook);
  console.log("----------------", JSON.stringify(selectedBook));

  if (!selectedBook) {
    return <div>No book selected</div>;
  }
  const { name, authors, publisher, country } = selectedBook;
  return (
    <div>
      <h2>Book Details</h2>
      <p>Name: {name}</p>
      <p>Author: {authors}</p>
      <p>Publisher: {publisher}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default BookDetails;
