import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Image from "../component/Image";
import scrollToTop from "../library/smoothscroll";

import "./Tab.css";

function Tab(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  const items = props.items;
  const elItem = items.map((item, index) => (
    <NavLink to={item.url} className="tab-item" activeClassName="tab-item--active" key={index} exact>
        <Image src={item.imagesrc} alt={`Tab ${item.label}`} />
        <span className="tab-label">{item.label}</span>
    </NavLink>
  ));

  return <ul className="tab-wrapper">{elItem}</ul>;
};

export default Tab;
