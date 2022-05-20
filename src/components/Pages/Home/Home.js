import "./Home.css";
import "../../commun/Tag/Tag.css";
import Tag from "../../commun/Tag/Tag";
import { PhotographersDatafeching } from "../../commun/PhotographerInfo/PhotographerInfo";

function Home() {
  const tags = [
    "#portrait",
    "#events",
    "#travel",
    "#animals",
    "#sport",
    "#architecture",
    "#art",
    "#fashion",
  ];
  const tagNames = tags.map((tag, index) => (
    <div className="tagLink" key={index}>
      {tag}
    </div>
  ));

  return (
    <div className="Home">
      <div className="tags">
        <Tag tagName={tagNames} />
        <PhotographersDatafeching />
      </div>
    </div>
  );
}

export default Home;
