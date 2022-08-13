/// FilteredResults

/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { learningGoals, topics, courses, certificates } from "../Data/dataCourses";
import CardList from "./Card/CardList";
import ChipGroup from "./Chip/ChipGroup";
import Chip from "./Chip/Chip";
import Typography from "./Typography";
import Container from "./Container/Container";

const Section = styled.section`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
`;

// Goal group
const GoalRadioGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const GoalLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding: 4px 0;
`;

const GoalSpan = styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 32px;
  background: white;
  border: 1px solid black;
  border-radius: 50px;
  padding: 0 12px;
  color: black;
  white-space: nowrap;
`;

const GoalInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  &:hover + ${GoalSpan} {
    background: white;
    border: 1px solid rgb(0, 86, 210);
    outline: 1px solid rgb(0, 86, 210);
    color: rgb(0, 86, 210);
  }
  &:active + ${GoalSpan} {
    background: white;
    border: 1px solid purple;
    outline: 1px solid purple;
    color: purple;
  }
  &:checked + ${GoalSpan} {
    background: #fff;
    border: 1px solid black;
    outline: 1px solid black;
    color: black;
  }
  &:checked:hover + ${GoalSpan} {
    background: white;
    border: 1px solid rgb(0, 86, 210);
    outline: 1px solid rgb(0, 86, 210);
    color: rgb(0, 86, 210);
  }
  &:checked:active + ${GoalSpan} {
    background: white;
    border: 1px solid purple;
    outline: 1px solid purple;
    color: purple;
  }
`;

// Filter group
// const FilterRadioGroup = styled.div`
//   display: flex;
//   gap: 8px;
//   align-items: center;
// `;
// const FilterLabel = styled.label`
//   cursor: pointer;
//   position: relative;
// `;

// const FilterSpan = styled.span`
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   height: 32px;
//   background: #fff;
//   border: 1px solid #fff;
//   border-radius: 50px;
//   padding: 0 12px;
//   color: black;
//   white-space: nowrap;
// `;
// const FilterInput = styled.input`
//   opacity: 0;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   cursor: pointer;
//   &:hover + ${FilterSpan} {
//     background: white;
//     border: 1px solid rgb(0, 86, 210);
//     color: rgb(0, 86, 210);
//   }
//   &:active + ${FilterSpan} {
//     background: white;
//     border: 1px solid purple;
//     color: purple;
//   }
//   &:checked + ${FilterSpan} {
//     background: black;
//     border: 1px solid black;
//     color: white;
//   }
//   &:checked:hover + ${FilterSpan} {
//     background: rgb(0, 86, 210);
//     border: 1px solid rgb(0, 86, 210);
//     color: white;
//   }
//   &:checked:active + ${FilterSpan} {
//     background: purple;
//     border: 1px solid purple;
//     color: white;
//   }
// `;

export default function FilteredResults(props) {
  const [filter, setFilter] = useState({});
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);

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

  const handleRadioClick = (e) => {
    let topicSelection = e.target.value;
    setFilter(topicSelection);
  }

  return (
    <Section aria-label='Popular courses on Coursera'>
      {/* Learning goal */}
      <h2>
        <Typography label='What are you looking to achieve today?' d2Semibold />
      </h2>

      <div>
        <h3>
          <Typography label='Select a goal' h2Semibold />
        </h3>

        {/* TEST TEST TEST */}
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
                  onClick={(e) => handleRadioClick(e)}
                />
              );
            })}
        </ChipGroup>
        {/* TEST END TEST END TEST END */}


        {/* <GoalRadioGroup
          aria-label='Select your learning goal'
          role='radiogroup'
        >
          <GoalLabel key='aa' htmlFor='goal1' aria-label='goal 1'>
            <GoalInput
              key='goal1'
              type='radio'
              value='goal 1'
              name='learning_goal'
            />
            <GoalSpan>Switch career</GoalSpan>
          </GoalLabel>
          <GoalLabel key='bb' htmlFor='goal2' aria-label='goal 2'>
            <GoalInput
              key='goal2'
              type='radio'
              value='goal 2'
              name='learning_goal'
            />
            <GoalSpan>Advance career</GoalSpan>
          </GoalLabel>
          <GoalLabel key='cc' htmlFor='goal3' aria-label='goal 3'>
            <GoalInput
              key='goal3'
              type='radio'
              value='goal 3'
              name='learning_goal'
            />
            <GoalSpan>Learn for fun</GoalSpan>
          </GoalLabel>
        </GoalRadioGroup> */}
      </div>

      {/* TEST TEST TEST */}
      {/* Filter topics */}
      <div
        css={{
          position: "sticky",
          top: 0,
          // height: 80,
          padding: "16px 0",
          zIndex: 100,
          backgroundColor: "#efefef",
          overflow: "auto",
        }}
      >
        <h3>
          <Typography label='Select a topic' h2Semibold />
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
                  onClick={(e) => handleRadioClick(e)}
                />
              );
            })}
        </ChipGroup>
      </div>
      {/* TEST END TEST END TEST END */}
      {/* <div
        css={{
          position: "sticky",
          top: 0,
          // height: 80,
          padding: "16px 0",
          zIndex: 100,
          backgroundColor: "#efefef",
          overflow: "auto",
        }}
      >
        <h2>Select a topic</h2>
        <FilterRadioGroup
          // className='filterRadioGroup'
          aria-label='Filter courses by'
          role='radiogroup'
        >
          {topics &&
            topics.map((topic) => {
              return (
                <FilterLabel
                  key={topic.id + "_label"}
                  htmlFor={topic.category}
                  aria-label={topic.category}
                >
                  <FilterInput
                    key={topic.id}
                    type='radio'
                    value={topic.category}
                    name='topic_type'
                    onClick={handleRadioClick}
                  />
                  <FilterSpan>{topic.category}</FilterSpan>
                </FilterLabel>
              );
            })}
        </FilterRadioGroup>
      </div> */}
      {/* <div
        css={{
          position: "sticky",
          top: 0,
          // height: 80,
          padding: "16px 0",
          zIndex: 100,
          backgroundColor: "#efefef",
          overflow: "auto",
        }}
      >
        <h2>Select a topic</h2>
        <div
          className='filterRadioGroup'
          aria-label='Filter courses by'
          role='radiogroup'
        >
          {topics &&
            topics.map((topic) => {
              return (
                <label
                  key={topic.id + "_label"}
                  htmlFor={topic.category}
                  aria-label={topic.category}
                >
                  <input
                    key={topic.id}
                    type='radio'
                    value={topic.category}
                    name='topic_type'
                    onClick={handleRadioClick}
                  />
                  <span>{topic.category}</span>
                </label>
              );
            })}
        </div>
      </div> */}
      {/* Course card list */}
      {filteredCourses.length > 0 ? (
        <div>
          <h3>Courses in {filter}</h3>
          <CardList product='course' filtered={filteredCourses} />
        </div>
      ) : (
        <div>
          <h3>Popular courses</h3>
          <CardList product='course' filtered={filteredCourses} />
        </div>
      )}
      {/* Certificate card list */}
      {filteredCertificates.length > 0 ? (
        <div>
          <h3>Certificates in {filter}</h3>
          <CardList product='certificate' filtered={filteredCertificates} />
        </div>
      ) : (
        <div>
          <h3>Popular certificates</h3>
          <CardList product='certificate' filtered={filteredCertificates} />
        </div>
      )}
    </Section>
  );
}



/// Carousel
/** @jsxImportSource @emotion/react */

import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { mq, breakpoints } from "../../Styles/tokens";
import { theme } from "../../Styles/theme";
import Button from "../Button/Button";

const CarouselWrapper = styled.div`
  max-width: 972px;
  overflow: hidden;
  background: #efefcc;
  margin: 24px 0;
`;

const Track = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s,
    transform 0.5s ease 0s !important;
`;

const Item = styled.div`
  height: 100%;
  width: 324px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.spacing[100]};
`;
export default function Carousel() {
  const [xPos, setXPos] = useState(0);
  const [trackScrollWidth, setTrackScrollWidth] = useState();
  const [wrapperWidth, setWrapperWidth] = useState();
  const wrapperRef = useRef();
  const trackRef = useRef();

  useEffect(() => {
    setWrapperWidth(wrapperRef.current.offsetWidth);
    setTrackScrollWidth(trackRef.current.scrollWidth);
  }, []);

  function handleNextClick() {
    if (xPos === 0 || trackScrollWidth > trackScrollWidth - xPos) {
      setXPos((prev) => prev + -972);
    }
  }

  function handlePrevClick() {
    if (xPos !== 0) {
      setXPos((prev) => prev + 972);
    }
  }

  return (
    <div css={{ maxWidth: "972px", margin: "0 auto" }}>
      <CarouselWrapper ref={wrapperRef}>
        <Track css={{ transform: `translateX(${xPos}px)` }} ref={trackRef}>
          <Item>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              1
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              2
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              3
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              4
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              5
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              6
            </div>
          </Item>
        </Track>
      </CarouselWrapper>
      <Button size='md' onClick={handlePrevClick} label='Prev' />
      <Button size='md' onClick={handleNextClick} label='Next' />
    </div>
  );
}

<style>

/* Filter radio group */
.filterRadioGroup {
  display: flex;
  gap: 8px;
  /* flex-wrap: wrap; */
  align-items: center;
  /* position: sticky;
  top: 0;
  height: 80;
  z-index: 100;
  background-color: white;
  overflow: auto; */
}

.filterRadioGroup input[type="radio"] {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.filterRadioGroup label {
  cursor: pointer;
  position: relative;
}

.filterRadioGroup span {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 32px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 50px;
  padding: 0 12px;
  color: black;
  white-space: nowrap;
}

.filterRadioGroup input[type="radio"]:hover + span {
  background: white;
  border: 1px solid rgb(0, 86, 210);
  color: rgb(0, 86, 210);
}

.filterRadioGroup input[type="radio"]:active + span {
  background: white;
  border: 1px solid purple;
  color: purple;
}

.filterRadioGroup input[type="radio"]:checked + span {
  background: black;
  border: 1px solid black;
  color: white;
}

.filterRadioGroup input[type="radio"]:checked:hover + span {
  background: rgb(0, 86, 210);
  border: 1px solid rgb(0, 86, 210);
  color: white;
}

.filterRadioGroup input[type="radio"]:checked:active + span {
  background: purple;
  border: 1px solid purple;
  color: white;
}

/* Goal radio group */
.goalRadioGroup {
  display: flex;
  gap: 8px;
  /* flex-wrap: wrap; */
  align-items: center;
  /* height: 100%; */
}

.goalRadioGroup input[type="radio"] {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.goalRadioGroup label {
  cursor: pointer;
  position: relative;
}

.goalRadioGroup span {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 32px;
  background: white;
  border: 1px solid black;
  border-radius: 50px;
  padding: 0 12px;
  color: black;
  white-space: nowrap;
}

.goalRadioGroup input[type="radio"]:hover + span {
  background: white;
  border: 1px solid rgb(0, 86, 210);
  outline: 1px solid rgb(0, 86, 210);
  color: rgb(0, 86, 210);
}

.goalRadioGroup input[type="radio"]:active + span {
  background: white;
  border: 1px solid purple;
  outline: 1px solid purple;
  color: purple;
}

.goalRadioGroup input[type="radio"]:checked + span {
  background: #fff;
  border: 1px solid black;
  outline: 1px solid black;
  color: black;
}

.goalRadioGroup input[type="radio"]:checked:hover + span {
  background: white;
  border: 1px solid rgb(0, 86, 210);
  outline: 1px solid rgb(0, 86, 210);
  color: rgb(0, 86, 210);
}

.goalRadioGroup input[type="radio"]:checked:active + span {
  background: white;
  border: 1px solid purple;
  outline: 1px solid purple;
  color: purple;
}
</style>






// Button

