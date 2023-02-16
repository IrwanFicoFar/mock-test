import style from "../styles/index.module.css";
import {
  ButtonBase,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";

const {
  Row,
  Col,
  Container,
  FloatingLabel,
  Button,
  Form,
  Table,
  InputGroup,
} = require("react-bootstrap");

const MyTodoList = () => {
  return (
    <div>
      <Row>
        <Col className="text-center">
          <h1> TO DO LIST</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md className={style.main}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Your List</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell asldhakdja aksdjhas</td>
                <td>
                  <FormControlLabel control={<Checkbox defaultChecked />} />
                  <Button variant="success" className="mx-1">
                    Edit
                  </Button>
                  <Button variant="danger" className="mx-1">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="justify-content-md-left mt-2">
        <Col sm={4}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="input your List"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Add
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default MyTodoList;
