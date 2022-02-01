import type { NextPage } from "next";
import { Comments } from "../components/Comments/Comments";
import { Description } from "../components/Description/Description";
import { FeaturedRepositories } from "../components/FeaturedRepositories/FeaturedRepositories";
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

      <FeaturedRepositories />

      <Comments />
    </>
  );
};

export default Home;
