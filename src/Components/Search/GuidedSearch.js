/** @jsxImportSource @emotion/react */

import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";
import Button from "../Button/Button";
import AutosuggestStyleTest from "../Autosuggest/AutosuggestStyleTest";
import SelectGoal from "../Select/SelectGoal";
import SelectDuration from "../Select/SelectDuration";
import SelectTopic from "../Select/SelectTopic";
import styles from "./GuidedSearch.module.scss";
import Typography from "../Typography";
import Icon from "../Icon/Icon";

// const GuidedSearchStyle = styled.div`
//   display: flex;
//   position: relative;
//   gap: 4px;
//   padding: 4px;
//   align-items: center;
//   background: white;
//   border-radius: 100px;
// `

export default function GuidedSearch() {
  const [showButtonLabel, setShowButtonLabel] = useState(false);
  const searchRef = useRef(null);

  // event listener
  useEffect(() => {
    document.addEventListener("click", handleSearchClick, false);

    return () => {
      document.removeEventListener("click", handleSearchClick, false);
    };
  }, []);

  // document click handler
  const handleSearchClick = (e) => {
    if (searchRef.current && searchRef.current.contains(e.target)) {
      setShowButtonLabel(true);
    } else {
      setShowButtonLabel(false);
    }
  };

  const searchButton = {
    position: "absolute",
    right: 4,
    display: showButtonLabel ? "flex" : "inline-block",
    gap: 12,
    alignItems: "center",
    borderRadius: 100,
    border: "none",
    backgroundColor: theme.palette.interactive.primary.default,
    color: theme.palette.white,
    height: 64,
    width: showButtonLabel ? 141 : 64,
    padding: showButtonLabel ? `0 ${theme.spacing[400]}` : 0,
    transition: "all .15s ease 0s",
    "&:hover": {
      backgroundColor: theme.palette.interactive.hover,
    },
  };

  return (
    <div css={{ display: "inline-block" }}>
      <div className={styles.guidedSearch} ref={searchRef}>
        <AutosuggestStyleTest />
        <SelectGoal />
        <SelectDuration />
        <SelectTopic />
        <button type='submit' style={searchButton}>
          {showButtonLabel && <Typography label='Search' h3Bold />}
          <Icon type='search' button='primary' size='md' />
        </button>
      </div>
    </div>
  );
}
