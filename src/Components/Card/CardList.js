/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CourseCard from "./CourseCard";
import CertificateCard from "./CertificateCard";
import { courses, certificates } from "../../Data/dataCourses";

export default function CardList(props) {
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
    padding: "24px 0",
    display: "flex",
    gap: 16,
    // overflow: "auto",
  })

  const ListItem = styled.li({
    cursor: "pointer"
  })

  return (
    <List>
      {filtered.length > 0
        ? filtered.map((el) => (
            <ListItem key={el.id}>
              {product === "course" && <CourseCard data={el} />}
              {product === "certificate" && <CertificateCard data={el} />}
            </ListItem>
          ))
        : randomCourses.map((el) => (
            <ListItem key={el.id}>
              {product === "course" && <CourseCard data={el} />}
              {product === "certificate" && <CertificateCard data={el} />}{" "}
            </ListItem>
          ))}
    </List>
  );
}
