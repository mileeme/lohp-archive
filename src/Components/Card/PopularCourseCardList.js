/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PopularCourseCard from "./PopularCourseCard";
import CertificateCard from "./CertificateCard";
import { courses, certificates } from "../../Data/dataCourses";

export default function PopularCourseCardList(props) {
  const { product, filtered } = props;

  const List = styled.ul({
    listStyle: "none",
    columnGap: 12,
    rowGap: 24,
    display: "grid",
    position: 'relative',
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    margin: 0,
    padding: 0,
  })

  // const ListItem = styled.li({
  //   cursor: "pointer"
  // })

  return (
    <List>
      {filtered.length > 0 && filtered.map((el) => (
          // <ListItem key={el.id}>
          //   <PopularCourseCard key={el.title} data={el} />
          // </ListItem>        
          <PopularCourseCard key={el.title} data={el} />
        ))
      }
    </List>
  );
}
