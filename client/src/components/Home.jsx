import Ad1 from "./HomeSection/Ad1";
import Ad2 from "./HomeSection/Ad2";
import Choose from "./HomeSection/Choose";
import Explore from "./HomeSection/Explore";
import FuturePath from "./HomeSection/FuturePath";
import Journey from "./HomeSection/Journey";
import List from "./HomeSection/List";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FuturePath />
      <Ad1 />
      <Explore />
      <Journey />
      <Ad2 />
      <List />
      <Choose />
      <Footer />
    </div>
  );
};

export default Home;
