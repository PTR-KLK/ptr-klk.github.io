import React from "react";
import { Icon, IconWrapper, IconText, Icons, Paragraph } from "./about.style";


function About(props) {
  return (
    <>
      <Icons multiple={props.icon.length>1?true:false}>
          {props.icon.map( (e, idx) => {
            return (
              <IconWrapper>
                <Icon multiple={props.icon.length>1?true:false} key={`ico${idx}`} size="4x" icon={e.body} color="#333" />
                {e.text ? <IconText>{e.text}</IconText> : null}
              </IconWrapper>
            )
          })}
      </Icons>
      {props.description ? <Paragraph>{props.description}</Paragraph> : null}
    </>
  );
}

export default About;
