import React from "react";
import { Img, Summary, List, Links, Icon } from "./project.style";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

function Project(props) {
  return (
    <>
      <Img
        invertOrder={props.invertOrder}
        src={props.image}
        alt={props.imageAlt}
      />
      <Summary invertOrder={props.invertOrder}>
        <List>
          {props.description.map((e, idx, arr) => {
            return (
              <React.Fragment key={`li${idx}`}>
                <li>{e}</li>
                {idx < arr.length - 1 ? <li> • </li> : null}
              </React.Fragment>
            );
          })}
        </List>
        <Links>
          <a href={props.repo} target="_blank" rel="noopener noreferrer">
            <Icon size="3x" icon={faGithubSquare} color="#333" />
          </a>
          {props.demo ? (
            <a href={props.demo} target="_blank" rel="noopener noreferrer">
              <Icon size="3x" icon={faWindowMaximize} color="#333" />
            </a>
          ) : null}
        </Links>
      </Summary>
    </>
  );
}

export default Project;
