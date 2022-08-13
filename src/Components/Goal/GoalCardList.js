/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import GoalCard from "./GoalCard";
import { cards } from "./GoalData";
import Typography from "../Typography";
import Icon from "../Icon/IconTest";
import { theme } from "../../Styles/theme";

export default function GoalCardList(props) {
  const { product, filtered } = props;

  const List = styled.ul({
    listStyle: "none",
    columnGap: 32,
    rowGap: 32,
    display: "grid",
    position: 'relative',
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    margin: 0,
    padding: 0,
  })

  return (
    <div css={{display: "grid", gap: 16}}>
      <List>
        {filtered.length > 0 && filtered.map((el) => (    
            <GoalCard key={el.title} data={el} />
          ))
        }
      </List>
      <div css={{display: "flex", justifyContent: "end"}}>
        <a href="#" css={{display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: theme.palette.interactive.primary.default}}><Typography label="View more" h3Bold /> <Icon size="md" icon="arrowNext" button="ghostPrimary" /></a>
      </div>

    </div>
  );
}
