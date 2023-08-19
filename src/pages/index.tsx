import { ReactElement } from "react";
import Layout from "../../components/layout";
import Products from "../../components/product/Products";

const Home = () => {
  return <Products />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout childern={page} title="home" />;
};

export default Home;
