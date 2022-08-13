/** @jsxImportSource @emotion/react */

// Carousel for career academy
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { tabs, skill, course, specialization, degree } from "./GoalData";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import GoalCardList from "./GoalCardList";
import { mq } from "../../Styles/tokens";

export default function GoalTabs(props) {
  const [activeTab, setActiveTab] = useState("All");
  const [tabNavs, setTabNavs] = useState([...tabs]);
  // const [filteredCards, setFilteredCards] = useState();
  const [product, setProduct] = useState();

  // useEffect(() => {
  //   const filtered = cards.filter((card) => card.category === activeTab);
  //   if (filtered) {
  //     setFilteredCards([...filtered]);
  //   }
  // }, [activeTab]);

  const handleTabClick = (currentTab) => {
    setActiveTab(currentTab);
    console.log(currentTab);
  };

  const handleActiveStyle = (currentTab) => {
    if (activeTab === currentTab) {
      return liActiveBorder;
    }
  };

  const TabWrapper = styled.div({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
    height: "auto",
    minHeight: 400,
    padding: "24px 0",
    color: theme.palette.black,
  });

  const Line = styled.span({
    position: "absolute",
    zIndex: 0,
    top: 48,
    left: 0,
    right: 0,
    border: `2px solid ${theme.palette.interactive.neutral.light}`,
    transition: "all .4s ease-in",
  });

  const StickyHeader = styled.div({
    position: "sticky",
    top: 0,
    zIndex: 100,
    overflow: "auto",
    backgroundColor: "rgba(256, 256, 256, 0.84)",
    backdropFilter: "blur(100px)",
  });

  const TabUl = styled.ul({
    paddingLeft: 0,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 32,
    overflowX: "hidden",
    marginBottom: 1,
    // [mq[3]]: {
    //   overflowX: "hidden",
    // },
  });

  const TabLi = styled.li({
    zIndex: 50,
    listStyle: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.7s",
    padding: "0 8px 8px",
    borderBottom: "3px solid transparent",
    "&:hover": {
      color: theme.palette.interactive.hover,
    },
    "&:active": {
      color: theme.palette.interactive.active,
    },
  });

  const liActiveBorder = {
    borderBottom: `3px solid ${theme.palette.interactive.primary.default}`,
    color: theme.palette.interactive.primary.default,
  };

  return (
    <TabWrapper>
      {/* Navigation */}
      <StickyHeader>
        <TabUl>
          {tabNavs &&
            tabNavs.map((tab) => (
              <TabLi
                key={tab.id}
                style={handleActiveStyle(tab.category)}
                onClick={() => handleTabClick(tab.category)}
              >
                <Typography label={tab.category} body1 />
              </TabLi>
            ))}
        </TabUl>
        <Line />
      </StickyHeader>
      {/* Tab content */}
      {activeTab === "All" && (
        <div css={{display: "grid", gap: 32}}>
          <GoalCardList product='All' filtered={skill} type={product}/>
          <GoalCardList product='All' filtered={course} type={product}/>
          <GoalCardList product='All' filtered={specialization} type={product}/>
          <GoalCardList product='All' filtered={degree} type={product}/>
        </div>
      )}

    </TabWrapper>
  );
}
