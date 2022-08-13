/** @jsxImportSource @emotion/react */

import {useState, useEffect, useRef} from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import {theme} from "../../Styles/theme";

export default function SelectDuration() {
  const [selection, setSelection] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!openDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  }, [openDropdown])

  // Listen for click
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      document.removeEventListener("click", handleOutsideClick, false)
    }
  }, [])

  // Close dropdown if click outside of dropdown
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(false);
    }
  }

  const handleControllerClick = () => {
    setOpenDropdown(current => !current);
  }

  const handleSelectClick = (e) => {
    setSelection(e.currentTarget.innerText)
    setOpenDropdown(false)
  }

  return (
    <>
      {/* controller */}
      <label htmlFor="duration">
        <span css={{position: "absolute", zIndex: 1, paddingLeft: 8, top: 10}}><Typography label="Duration" body2Bold /></span>
        <input id="duration" css={{position: "relative", border: "none", borderRadius: 8, backgroundColor: "none", cursor: "pointer", height: 54, minWidth: 100, paddingTop: 8,paddingLeft: 8, "&::placeholder": {fontSize: 16, color: theme.palette.interactive.neutral.default}, "&:focus": {outline: "none", border: "none", backgroundColor: theme.palette.interactive.hoverLight, color: theme.palette.interactive.hover, "&::placeholder": {color: theme.palette.interactive.hover}}}} onClick={handleControllerClick} type="text" placeholder="Duration" value={selection} readOnly/>
      </label>


      {/* dropdown */}
      {showDropdown && 
        <div css={{display: "block", position: "absolute", top: 80, left: 0, right: 0, borderRadius: 24, background: theme.palette.white, padding: 16, boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)"}} ref={dropdownRef}>
        <ul css={{listStyle: "none", margin: 0, padding: 0}}>
          <li css={{cursor: "pointer", padding: "12px 16px", "&:hover": {backgroundColor: theme.palette.interactive.hoverLight, color: theme.palette.interactive.hover}}} onClick={handleSelectClick}>duration1</li>
          <li css={{cursor: "pointer", padding: "12px 16px", "&:hover": {backgroundColor: theme.palette.interactive.hoverLight, color: theme.palette.interactive.hover}}} onClick={handleSelectClick}>duration2</li>
          <li css={{cursor: "pointer", padding: "12px 16px", "&:hover": {backgroundColor: theme.palette.interactive.hoverLight, color: theme.palette.interactive.hover}}} onClick={handleSelectClick}>duration3</li>
        </ul>
      </div>
      }
    </>
  )
}