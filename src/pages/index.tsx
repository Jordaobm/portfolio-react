import type { NextPage } from "next";
import { Description } from "../components/Description/Description";
import { Header } from "../components/Header/Header";
import { Items } from "../components/Items/Items";
import { Repositories } from "../components/Repositories/Repositories";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Description />

      <Items />

      <Repositories />
    </>
  );
};

export default Home;
