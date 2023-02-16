import Link from "next/link";
import style from "../styles/index.module.css";
import MyFooter from "../components/footer";
import MyHeader from "../components/header";
import MyMain from "@/components/main";
import { Container, Modal } from "react-bootstrap";
import MyNavbar from "@/components/navbar";

const home = () => {
  return (
    <Container>
      <MyNavbar />
      <MyHeader />
      <MyMain />
      <MyFooter />
    </Container>
  );
};

export default home;
