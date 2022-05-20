import "./PhotographerInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Tag/Tag.css";

export function PhotographersDatafeching() {
  const [photographers, setPhotographers] = useState([]);

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
      <div className="photorgaphersContainers">
        {photographers.map((photographer) => (
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
