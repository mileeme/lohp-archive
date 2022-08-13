/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { learningGoals, topics, courses, certificates } from "../../Data/dataCourses";
import {theme} from "../../Styles/theme";
import ChipGroup from "../Chip/ChipGroup";
import Chip from "../Chip/Chip";
import Typography from "../Typography";
import Container from "../Container/Container";
import Section from "../Container/Section";
import Carousel2 from "../Carousel/Carousel2";

// const Section = styled.section`
//   background-color: ${theme.palette.background.gray};
//   display: flex;
//   flex-direction: column;
//   padding: 160px 0;
// `;

const StickyHeader = styled.div({
  position: "sticky",
  top: 0,
  padding: "16px 0",
  zIndex: 100,
  backgroundColor: theme.palette.background.gray,
  overflow: "auto",
})

export default function FilteredResults2(props) {
  const [filter, setFilter] = useState("data science");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [goal, setGoal] = useState("start my first career");

  useEffect(() => {
    const filteredCours = courses.filter((course) => course.topic === filter);
    const filteredCerts = certificates.filter(
      (certificate) => certificate.topic === filter
    );

    if (filteredCours) {
      setFilteredCourses([...filteredCours]);
    }
    if (filteredCerts) {
      setFilteredCertificates([...filteredCerts]);
    }
  }, [filter]);

  const handleGoalChange = (event) => {
    let topicSelection = event.target.value;
    setGoal(topicSelection);
  }  
  
  const handleFilterChange = (event) => {
    let topicSelection = event.target.value;
    setFilter(topicSelection);
  }

  return (
    <Section aria-label='Popular courses on Coursera' bgColor={theme.palette.background.gray}>
      <Container lg >
        {/* Learning goal */}
        <h2>
          <Typography label='What are you looking to achieve today?' d2Semibold />
        </h2>

        <div>
          <h3>
            <Typography label='Select your learning goal:' h3 />
          </h3>
          <ChipGroup aria-label='Select a goal'>
            {learningGoals &&
              learningGoals.map((topic) => {
                return (
                  <Chip
                    type='radio'
                    chipKey={topic.id}
                    htmlFor={topic.category}
                    aria-label={topic.category}
                    name='lohp_goals'
                    value={topic.category}
                    content={topic.category}
                    onChange={(event) => handleGoalChange(event)}
                    checked={goal === topic.category}

                  />
                );
              })}
          </ChipGroup>
        </div>

        {/* Filter topics */}
        <StickyHeader>
          <h3>
            <Typography label="Select the topic you're interested in:" h3 />
          </h3>
          <ChipGroup aria-label='Filter courses by'>
            {topics &&
              topics.map((topic) => {
                return (
                  <Chip
                    type='radio'
                    chipKey={topic.id}
                    htmlFor={topic.category}
                    aria-label={topic.category}
                    name='lohp_filter'
                    value={topic.category}
                    content={topic.category}
                    onChange={(event) => handleFilterChange(event)}
                    checked={filter === topic.category}
                  />
                );
              })}
          </ChipGroup>
        </StickyHeader>
        
        {/* Course card list */}
        {filteredCourses.length > 0 ? (
          <div>
            <h2><Typography label='Recommendations for you' h1/></h2>
            <h3><Typography label={`Most popular ${filter} courses`} h2/></h3>
            <Carousel2 product='course' filtered={filteredCourses} />
          </div>
        ) : (
          <div>
            <h3>Popular courses</h3>
            <Carousel2 product='course' filtered={filteredCourses} />
          </div>
        )}
        

      </Container>
    </Section>
  );
}
