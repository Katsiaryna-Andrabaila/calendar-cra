import "antd/dist/reset.css";
import { Layout } from "antd";
import "./App.css";
import { AppRouter } from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Content } from "antd/es/layout/layout";

const App = () => {
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
