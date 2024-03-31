import "../App.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeBookDetails } from "../Redux/action";

function BooksTable() {
  const navigate = useNavigate();
  const tableData = useSelector((state) => state.tableData);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(storeBookDetails(item));
    navigate("/book-details");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr
            key={index}
            onClick={() => {
              handleClick(item);
            }}
          >
            <td>{item.name}</td>
            <td>{item.authors}</td>
            <td>{item.publisher}</td>
            <td>{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default BooksTable;
