import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

function MyButton({ onClick }) {
  const loadingData = useSelector((state) => state.loadingReducer);

  if (loadingData.loadingStatus) {
    return (
      <p style={{ color: "white", background: "transparent" }} disabled>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </p>
    );
  }
  return (
    <p
      style={{ color: "red", align: "center", background: "transparent" }}
      onClick={onClick}
    />
  );
}

export default MyButton;
