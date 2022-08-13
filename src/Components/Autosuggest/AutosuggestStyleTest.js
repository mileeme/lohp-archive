/** @jsxImportSource @emotion/react */

import {useState, useEffect, useRef} from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import {theme} from "../../Styles/theme";
import Button from "../Button/Button";
import {options} from "./Options";
import Icon from "../Icon/Icon";


export default function AutosuggestStyleTest(props) {
  // dynamic user input values
  const [userInput, setUserInput] = useState('');
  
  // boolean based on 2 params (userInput, filter options includes(userInput))
  const [showOptions, setShowOptions] = useState(false);

  // array list when options includes(userInput)
  const [filteredOptions, setFilteredOptions] = useState();
  
  // boolean state of delete button
  const [showDelete, setShowDelete] = useState(false);

  // refs 
  const defaultDropdownRef = useRef(null);
  const suggestionDropdownRef = useRef(null);
  const inputWrapperRef = useRef(null);

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  // event listener 
  useEffect(() => {
    document.addEventListener("click", handleClick, false);

    return () => {
      document.removeEventListener("click", handleClick, false)
    }
  }, [])


  // document click handler
  const handleClick = (e) => {
    if (suggestionDropdownRef.current && !suggestionDropdownRef.current.contains(e.target)) {
      // setShowDelete(false);
      setShowOptions(false);
      setFilteredOptions();
    }

    if (!inputWrapperRef.current.contains(e.target)) {
      setShowDelete(false);
    }
  }

  // input change handler
  const handleInputChange = (e) => {
    // Set current input value
    setUserInput(e.currentTarget.value);

    if (userInput) {
      setShowDelete(true);
      // Filter dataset with user input match
      let filter = options.filter(option => {
        return option.toLowerCase().includes(userInput.toLowerCase())
      });
      if (filter.length > 0) {
        setShowOptions(true);
        setFilteredOptions(filter);
      } else {
        setShowOptions(false);
        setFilteredOptions();
      }
    }  
  }

  // maps key event 1:1 with click event 
  const handleInputKeyDown = (e) => {
    // handles return key
    if (e.keyCode === 13) {
      e.preventDefault();
      setUserInput(e.currentTarget.value);
      setShowDelete(false);
      setShowOptions(false);
    }
    // Backspace delete
    if (e.keyCode === 8 && userInput.length === 1) {
      setUserInput('');
      setShowDelete(false);
      setShowOptions(false);
    }
  }

  // input delete handler
  function handleDeleteClick(e) {
    e.preventDefault();
    setUserInput('');
    setShowDelete(false);
    // setShowOptions(false);
    // setFilteredOptions();
    console.log(e.target)
  }

  // dropdown selection handler
  const handleOptionClick = (e) => {
    setUserInput(e.currentTarget.innerText);
    setShowDelete(false);
    setShowOptions(false);
    setFilteredOptions();
  }

  // "&:focus": {
  //   outline: 0
  // },  
  // "&:focus:not(:focus-visible)": {
  //   outline: 0
  // },
  // "&:focus-within": {
  //   boxShadow: `0 0 0 1px ${theme.palette.white}`,
  //   transition: "all 250ms ease-in",
  // }  
  return (
    <>
      {/* Input wrapper */}
      <div css={{display: "grid", gridDirection: "column", gridTemplateColumns: showDelete ? "auto 1fr" : "auto", width: 300}} ref={inputWrapperRef}>
        {/* Input */}
        <input css={{height: 48, minWidth: 200, border: "none", background: "transparent", padding: "0 16px", "&:focus": {outline: 0}}} type="text" placeholder='Type something that starts with "a"' value={userInput} onChange={handleInputChange} onKeyDown={handleInputKeyDown} onFocus={onFocus} onBlur={onBlur}/>
        {/* Delete button */}
        {showDelete && <input css={{border: 0, backgroundColor: "transparent", color: theme.palette.interactive.neutral.default, "&:hover": {backgroundColor: theme.palette.interactive.hoverLight}}} type="button" value="Delete" onClick={handleDeleteClick} />}      
      </div>
      
      {/* default dropdown */}
      { focused && !userInput &&
        <div css={{    
          zIndex: 100,
          display: "block",
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          background: theme.palette.white,
          padding: 16,
          borderRadius: 24,
          boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
          }} 
          ref={defaultDropdownRef}
        >
          <Typography label="Default content: " h3Bold/><br/>
          <Typography label="Curated buttons and links when user first engages input field" body1/>
        </div>
      }

      {/* suggestion dropdown */}
      {showOptions &&
        <div css={{   
          zIndex: 100, 
          display: "block",
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          background: theme.palette.white,
          padding: 16,
          borderRadius: 24,
          boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
          }} 
          ref={suggestionDropdownRef}
        >
          <ul css={{listStyle: "none", margin: 0, padding: 0}}>
            {filteredOptions.map(option => <li css={{display: "flex", gap: 16, alignItems: "center", cursor: "pointer", padding: "12px 16px", "&:hover": {backgroundColor: theme.palette.interactive.hoverLight, color: theme.palette.interactive.hover}}} key={options.indexOf(option)} onClick={handleOptionClick}><Icon type="search" size="sm" button="ghostNeutral"/>{option}</li>)}
          </ul>
        </div>
      }
    </>
  )
}