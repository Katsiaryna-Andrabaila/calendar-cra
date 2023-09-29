import { Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const navItemsNotAuth = ["Log in"].map((el) => ({
    key: el,
    label: el,
    onClick: () => navigate("/login"),
  }));

  const navItemsAuth = ["Log out"].map((el) => ({
    key: el,
    label: el,
    onClick: () => logout(),
  }));

  return (
    <Header>
      <Row justify={"end"}>
        {isAuth && <div style={{ color: "white" }}>{user.username}</div>}
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
