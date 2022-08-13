/** @jsxImportSource @emotion/react */

// This is career academy card list 
import styled from "@emotion/styled";
import DegreeCard from "./DegreeCard";

export default function DegreeCardList(props) {
  const { selection } = props;

  const List = styled.ul({
    // listStyle: "none",
    // display: "flex",
    // flexWrap: "wrap",
    // gap: 32,
    // margin: 0,
    // padding: "40px 0",
    listStyle: "none",
    columnGap: 12,
    rowGap: 24,
    display: "grid",
    position: 'relative',
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    margin: 0,
    padding: "40px 0",
  })

  // const ListItem = styled.li({
  //   cursor: "pointer"
  // })

  return (
    <List>
      {selection.map((item) => (
        <DegreeCard item={item} />
      ))}
    </List>
  );
}
