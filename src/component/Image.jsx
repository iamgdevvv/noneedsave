import React from "react";
import { Link } from "react-router-dom";

import "./Image.css";

function Image(props) {
  const link = props.link;
  const src = props.src;
  const alt = props.alt;

  const el_img = <img src={src} alt={alt} loading="lazy" />;

  return (
    <figure className="figure-image">
      {link ? (
        <Link to={link} className="image-wrapper">
          {el_img}
        </Link>
      ) : (
        <div className="image-wrapper">{el_img}</div>
      )}
    </figure>
  );
}

export default Image;
