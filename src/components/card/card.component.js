import React from "react";
import {
  CardContainer,
  CardTitle,
  CardContent,
  CardImg,
  CardSummary,
  CardList,
  CardLinks,
  CardIcon,
} from "./card.style";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

function Card(props) {
  return (
    <CardContainer invertOrder={props.invertOrder}>
      <CardTitle>{props.title}</CardTitle>
      <CardContent>
        <CardImg
          invertOrder={props.invertOrder}
          src={props.image}
          alt={props.imageAlt}
        />
        <CardSummary invertOrder={props.invertOrder}>
          <CardList>
            {props.description.map( (e,idx,arr) => {
              return (
                <>
                  <li key={idx}>{e}</li>
                  {idx < arr.length - 1 ? <li key={idx}> • </li> : null}
                </>
              );
            })}
          </CardList>
          <CardLinks>
            <a href={props.repo} target="_blank" rel="noopener noreferrer">
              <CardIcon size="3x" icon={faGithubSquare} color="#333" />
            </a>
            {props.demo ? (
              <a href={props.demo} target="_blank" rel="noopener noreferrer">
                <CardIcon size="3x" icon={faWindowMaximize} color="#333" />
              </a>
            ) : null}
          </CardLinks>
        </CardSummary>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
