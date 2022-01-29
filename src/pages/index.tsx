import type { NextPage } from "next";
import { Description } from "../components/Description/Description";
import { Header } from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Description />
    </>
  );
};

export default Home;
