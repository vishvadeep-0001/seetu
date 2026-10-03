import Ad1 from "./HomeSection/Ad1";
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
    </div>
  );
};

export default Home;
