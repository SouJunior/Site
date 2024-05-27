import React from "react";
import style from "./Card.module.css";
import { Paragraph } from "../Paragraph";
import { Heading } from "../Heading";

const localStyle = {
  color: "#fff",
};

const Card = ({ title, subtitle, description, image, type, path }) => (
  <section className={type === "type-1" ? style.card : style.card2}>
    <Heading level={"h2"}>
      <span style={localStyle}>{title}</span>
    </Heading>
    <div className={style.container}>
      <div className={style.content}>
        <Heading level={"h2"}>
          <span style={localStyle}>{subtitle}</span>
        </Heading>

        {description.map((paragraph) => (
          <Paragraph key={paragraph}>
            <span style={localStyle}>{paragraph}</span>
          </Paragraph>
        ))}
        <a href={path} target="_blank" rel="noreferrer">
          <button className={style.button}>
            Clique aqui e Confira!
          </button>
        </a>
      </div>

      <div className={style.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  </section>
);

export default Card;
