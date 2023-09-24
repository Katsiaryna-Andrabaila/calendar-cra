import { Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);

  const navItemsNotAuth = ["Log in"].map((el) => ({
    key: el,
    label: el,
    onClick: () => navigate("/login"),
  }));

  const navItemsAuth = ["Log out"].map((el) => ({
    key: el,
    label: el,
    onClick: () => navigate("/"),
  }));

  return (
    <Header>
      <Row justify={"end"}>
        {isAuth && <div style={{ color: "white" }}>User</div>}
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={isAuth ? navItemsAuth : navItemsNotAuth}
        />
      </Row>
    </Header>
  );
};

export default Navbar;
