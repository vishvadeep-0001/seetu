import Ad1 from "./HomeSection/Ad1";
import Ad2 from "./HomeSection/Ad2";
import Explore from "./HomeSection/Explore";
import FuturePath from "./HomeSection/FuturePath";
import Journey from "./HomeSection/Journey";
import List from "./HomeSection/List";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FuturePath />
      <Ad1 />
      <Explore />
      <Journey />
      <List />
      <Ad2 />
    </div>
  );
};

export default Home;
