/** @jsxImportSource @emotion/react */

// Carousel for career academy
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import { topics, courses } from "../../Data/dataCourses";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import PopularCourseCardList from "../Card/PopularCourseCardList";
import { mq } from "../../Styles/tokens";

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState("data science");
  const [tabNavs, setTabNavs] = useState([...topics]);
  const [filteredCourses, setFilteredCourses] = useState();
  const [tabContent, setTabContent] = useState(courses);

  useEffect(() => {
    const filtered = courses.filter((course) => course.topic === activeTab);
    if (filtered) {
      setFilteredCourses([...filtered]);
    }
  }, [activeTab]);

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
    // margin: "0 auto",
    padding: "24px 0",
    color: theme.palette.black,
    // maxWidth: 1344,
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
    // padding: "16px 0",
    zIndex: 100,
    backgroundColor: theme.palette.background.grayLight,
    overflow: "auto",
  });

  const TabUl = styled.ul({
    paddingLeft: 0,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 8,
    overflow: "scroll",
    marginBottom: 1,
    [mq[3]]: {
      overflow: "visible",
    },
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
    borderBottom: `3px solid ${theme.palette.interactive.neutral.default}`,
  };

  const TabContent = styled.div``;

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
      <TabContent>
        {/* {tabContent && Object.values(tabContent).map(item => <div>{item.title}</div>)} */}
        {filteredCourses && (
          <PopularCourseCardList product='course' filtered={filteredCourses} />
        )}
      </TabContent>
    </TabWrapper>
  );
}
