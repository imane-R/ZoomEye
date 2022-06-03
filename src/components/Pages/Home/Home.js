import "./Home.css";
import "../../commun/Tag/Tag.css";
import { PhotographerInfo } from "../../commun/PhotographerInfo/PhotographerInfo";

function Home() {
  return (
    <div className="Home">
      <div className="tags">
        <PhotographerInfo />
      </div>
    </div>
  );
}

export default Home;
