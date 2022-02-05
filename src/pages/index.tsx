import type { NextPage } from "next";
import { Comments } from "../components/Comments/Comments";
import { Description } from "../components/Description/Description";
import { FeaturedRepositories } from "../components/FeaturedRepositories/FeaturedRepositories";
import { Footer } from "../components/Footer/Footer";
import { GoBack } from "../components/GoBack/GoBack";
import { Header } from "../components/Header/Header";
import { Items } from "../components/Items/Items";
import { Profile } from "../components/Profile/Profile";
import { Repositories } from "../components/Repositories/Repositories";
import { Technologies } from "../components/Technologies/Technologies";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Description />

      <Items />

      <Repositories />

      <FeaturedRepositories />

      <Comments />

      <Technologies />

      <Profile />

      <Footer />

      <GoBack />
    </>
  );
};

export default Home;
