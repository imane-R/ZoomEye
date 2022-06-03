import "./PhotographerInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function PhotographerInfo() {
  const tags = [
    "portrait",
    "events",
    "travel",
    "animals",
    "sport",
    "architecture",
    "art",
    "fashion",
  ];
  const [Photographers, setPhotographers] = useState([]);
  const [activeTags, setActiveTags] = useState([]);

  function ActiveTag(tag) {
    let tagNameIndex = activeTags.indexOf(tag.tag);
    if (tagNameIndex === -1) {
      activeTags.push(tag.tag);
    } else {
      console.log("yes");
      activeTags.splice(tagNameIndex, 1);
    }
    setActiveTags(activeTags);
    console.log(activeTags);
  }

  useEffect(() => {
    axios
      .get("Data.json")
      .then((res) => {
        console.log(res);
        setPhotographers(res.data.photographers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="Tags">
        {tags.map((tag, index) => (
          <div
            className="tagLink"
            key={index}
            onClick={() => {
              ActiveTag({ tag, index });
            }}
          >
            #{tag}
          </div>
        ))}
      </div>
      <div className="photorgaphersContainers">
        {Photographers.map((photographer, index) => (
          <div className="photgrapherContainer" key={photographer.id}>
            <img
              src={require("../../../SamplePhotos/PhotographersIDPhotos/" +
                photographer.portrait)}
              alt={photographer.altText}
              className="photgrapherImage"
            />

            <h1 className="photographerName"> {photographer.name}</h1>
            <p className="location">
              {photographer.country} , {photographer.city}
            </p>
            <p className="tagLine">{photographer.tagline}</p>
            <p className="price">{photographer.price}$/jour</p>
            <div className="Tags">
              {photographer.tags.map((tag, index) => (
                <div className="tagLink" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
