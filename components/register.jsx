import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { firebaseRegister } from "@/util/auth";
import { loadingAction } from "@/redux/reducer/loading";

import { Button, Col, Form, Row } from "react-bootstrap";
import MyButton from "@/loading_button";
import style from "../styles/index.module.css";

const MyRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regMsg, setRegMsg] = useState("");
  console.log(regName);
  console.log(regEmail);
  console.log(regPassword);

  const submitRegister = async () => {
    console.log(regName, regEmail, regPassword);

    const resp = await firebaseRegister(regName, regEmail, regPassword);
    if (resp.status === "ERROR") {
      dispatch(loadingAction.toggleLoadingStatus());
      setRegMsg(resp.message);
    } else {
      dispatch(loadingAction.toggleLoadingStatus());
      setRegMsg("REGISTER SUCCESSFULLY ");
      router.push("/login");
    }
  };

  return (
    <Row md className="justify-content-sm-center">
      <Col md={5} className={style.register}>
        <h4 className="text-center"> Register</h4>
        <Form className={style.form}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => setRegName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setRegEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Input password"
              onChange={(e) => setRegPassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <MyButton />
            <h6 className="text-light">{regMsg}</h6>
          </div>
          <Button
            variant="primary"
            className="me-2 my-2"
            type="submit"
            onClick={submitRegister}
          >
            Submit
          </Button>
          <Link href="/login">
            <Button variant="warning" type="submit">
              Back to login
            </Button>
          </Link>
        </Form>
      </Col>
    </Row>
  );
};

export default MyRegister;
