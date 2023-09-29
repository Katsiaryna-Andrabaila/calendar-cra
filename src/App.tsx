import "antd/dist/reset.css";
import { Layout } from "antd";
import "./App.css";
import { AppRouter } from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Content } from "antd/es/layout/layout";
import { useActions } from "./hooks/useActions";
import { useEffect } from "react";
import { UserInterface } from "./models/User";

const App = () => {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
      setUser({
        username: localStorage.getItem("username" || ""),
      } as UserInterface);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};

export default App;
