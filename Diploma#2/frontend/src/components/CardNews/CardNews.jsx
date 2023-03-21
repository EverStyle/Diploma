import React, { useState } from "react";
import Card from "./Card";
import cards from "./json";
import "./CardNews.css";
import { Link } from "react-router-dom";

function CardNews() {
  const path = window.location.pathname.substring(1);
  const [activeCard, setActiveCard] = useState(path);
  return (
    <>
      <div className="cards ">
        {cards.map((item) => (
          <Link
            to={`${item.route}`}
            onClick={() => setActiveCard(item.route)}
            key={item.name}
            className={`card ${activeCard === item.route && "active"}`}
          >
            <Card item={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default CardNews;
