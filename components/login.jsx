import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadingAction } from "../redux/reducer/loading";
import { firebaseLogin } from "../util/auth";
import { useRouter } from "next/router";
import MyButton from "@/loading_button";

import Link from "next/link";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import style from "../styles/index.module.css";

const MyLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const submitLogin = async () => {
    dispatch(loadingAction.toggleLoadingStatus());
    const resp = await firebaseLogin(loginEmail, loginPassword);
    if (resp.status === "SUCCESS") {
      dispatch(loadingAction.toggleLoadingStatus());
      router.push("/list");
    } else {
      dispatch(loadingAction.toggleLoadingStatus());
      setLoginMsg(resp.message);
    }
  };

  return (
    <Row md className="justify-content-sm-center">
      <Col md={5} className={style.login}>
        <h4 className="text-center"> Login</h4>
        <Form className={style.form}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              ensure that email have been registered
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <MyButton title="Login" />
            <h6 className="text-light">{loginMsg}</h6>
          </div>
          <Button variant="primary" type="submit" onClick={submitLogin}>
            Submit
          </Button>
          <div className="text-center mt-2">
            or {""}
            <Link href="/register">don't have an account ?</Link>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default MyLogin;
