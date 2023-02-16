import Link from "next/link";
import style from "../styles/index.module.css";
import MyFooter from "@/components/footer";
import MyNavbar from "@/components/navbar";
import MyTodoList from "@/components/todolist";
import { Container } from "react-bootstrap";

const list = () => {
  return (
    <Container>
      <MyNavbar />
      <MyTodoList />
      <MyFooter />
    </Container>
  );
};

export default list;
