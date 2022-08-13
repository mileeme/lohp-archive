/** @jsxImportSource @emotion/react */

import Button from "../Button/Button";
import styled from "@emotion/styled/macro";

export default function Arrow(props) {
  const {direction, handleClick} = props;

  return (
    <div 
      onClick={handleClick}
      css={{
        display: "flex",
        position: "absolute",
        top: "50%",
        right: direction === "right" && 25,
        left: direction !== "right" && 25,
        justifyContent: "center",
        alignItems: "center",
        transition: "transform ease-in 0.1s",
    }}>
      {direction === "right" ? <Button size="md" icon="arrowNext" variant="primary" /> : <Button size="md" icon="arrowPrev" variant="primary" />}
    </div>
  );
}
