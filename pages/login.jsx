const { Container } = require("react-bootstrap");
import MyLogin from "@/components/login";

const login = () => {
  return (
    <Container>
      <MyLogin />
    </Container>
  );
};

export default login;
