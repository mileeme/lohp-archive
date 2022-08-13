/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CourseCard2 from "./CourseCard2";
// import CertificateCard from "./CertificateCard";
// import CareerAcademyCard from "./CareerAcademyCard";
import { courses, certificates } from "../../Data/dataCourses";
// import { tokens } from "../../Styles/tokens";

export default function CardList2(props) {
  const [randomCourses, setRandomCourses] = useState([]);
  const { product, filtered } = props;

  //** Randomizer **/
  useEffect(() => {
    if (filtered.length === 0) {
      if (product === "course") {
        setRandomCourses(getRandom(courses, 6));
      } else if (product === "certificate") {
        setRandomCourses(getRandom(certificates, 6));
      }
    }
  }, []);

  function getRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const List = styled.ul({
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 12,
    margin: 0,
    padding: 0,
  })

  const ListItem = styled.li({
    cursor: "pointer"
  })

  return (
    <List>
      {filtered.length > 0
        ? filtered.map((el) => (
            <ListItem key={el.id}>
              {product === "course" && <CourseCard2 data={el} />}
              {/* {product === "certificate" && <CertificateCard data={el} />} */}
            </ListItem>
          ))
        : randomCourses.map((el) => (
            <ListItem key={el.id}>
              {product === "course" && <CourseCard2 data={el} />}
              {/* {product === "certificate" && <CertificateCard data={el} />}{" "} */}
            </ListItem>
          ))}
    </List>
  );
}
