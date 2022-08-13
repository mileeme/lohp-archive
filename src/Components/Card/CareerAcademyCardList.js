/** @jsxImportSource @emotion/react */

// This is career academy card list 
import styled from "@emotion/styled";
import CareerAcademyCard from "./CareerAcademyCard";

export default function CareerAcademyCardList(props) {
  const { selection } = props;

  const List = styled.ul({
    display: "flex",
    listStyle: "none",
    padding: 0,
    gap: 32,
    margin: 0,
    padding: 0,
  })

  const ListItem = styled.li({
    cursor: "pointer"
  })

  return (
    <List>
      {selection.map((item) => (
        <ListItem key={item.id}>
          <CareerAcademyCard item={item} />
        </ListItem>
      ))}
    </List>
  );
}
